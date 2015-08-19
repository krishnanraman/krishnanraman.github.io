package com.marin.dt

import org.apache.spark.SparkContext
import org.apache.spark.SparkContext._
import org.apache.spark.SparkConf
import org.apache.spark.rdd._
import com.marin.util.Args
import java.io.PrintWriter
import org.apache.spark.mllib.linalg.{DenseVector, SparseVector}
import org.apache.spark.mllib.regression.LabeledPoint
import org.apache.spark.mllib.tree.DecisionTree
import org.apache.spark.mllib.tree.model.{DecisionTreeModel,Node}
import org.apache.spark.mllib.evaluation.RegressionMetrics

case class schema(keyword_instance_id:String,clicks:Double,conversions:Double,revenue:Double,
        account:String,folder_id:String,campaign_name:String,publisher_group_name:String,
        keyword:String,match_type:String,publisher:String,quality_score:Int,
        conversion_rate_mean:Double,revenue_per_conversion:Double,
        rest:Map[Int,String]) {

        def folderRevenuePerClick = conversion_rate_mean * revenue_per_conversion
        def revenuePerClick = if (clicks == 0) 0 else revenue/clicks
        def matchToNum:Double = match_type match {
            case "BROAD" => 0.0
            case "EXACT" => 1.0
            case "PHRASE" => 2.0
            case _ => 0.0
        }
}

case class SchemaVector(s:schema, v:LabeledPoint)

case class NodeStats(node:Int, left:Int, right:Int, isLeaf:Boolean, parent:Int = -1)

object DecisionTreeClustering extends App {

    val n = 26 // columns in each row

    def str2schema(s:String) = {
        val array = s.split("\t")

        def sanitize(x:String) = {
            x
            .replace("+", " ")
            .replace("_", " ")
            .replaceAll("[^A-Za-z ]","")
            .toLowerCase
            .trim
        }

        def strip(x:String) =  {
            x
            .trim
            .replace("+", " ")
            //.replace(" B ", " ")
            //.replace("NB", " ")
            //.replace("Marin Bidding", " ")
            //.replace("Control", " ")
            //.replace("main", " ")
            //.replace("Yes", " ")
            //.replace("ROAS3.0", " ")
        }
            
        schema(array(0),array(1).toDouble,array(2).toDouble,array(3).toDouble,
            sanitize(array(4)), sanitize(array(5)),sanitize(array(6)),sanitize(array(7)),
            sanitize(array(8)),array(9),sanitize(array(10)),array(11).toInt,
            array(12).toDouble,array(13).toDouble,
            (14 until n).map{ x=> (x, sanitize(strip(array(x)))) }.toMap)
    }

    def uniqueWords(x:RDD[String]):List[String] = {
        x
        .aggregate(Set[String]())((a:Set[String],b:String) => 
            //(b.split(" ").flatMap{ x=> x.split("_") }.toSet ++ a), (u:Set[String],v:Set[String]) => u++v)
            (Set(b) ++ a), (u:Set[String],v:Set[String]) => u++v)
        .toList
        .sorted
    }

    def persist[T](x:Traversable[T], name:String):Unit = {
        val pw = new PrintWriter(name)
        if (x.isInstanceOf[Map[String, Int]]) {
            x.asInstanceOf[Map[String, Int]]
            .toList
            .sortBy{ a:(String, Int) => a._2 }
            .foreach{pw.println}
        } else {
            x.foreach{pw.println}
        }

        pw.flush
        pw.close
    }

    def bow(x:String, coll:List[String]):Array[Double] = {
        val indices = x.split(" ").map{ w => coll.indexOf(w) }
        val values = Array.fill[Double](indices.size)(1.0)
        new SparseVector(coll.size, indices, values).toArray
    }

    def traverse(x:Node):List[Node] = {
        val leftOpt = x.leftNode
        val rightOpt = x.rightNode
        val leftNodes = if (leftOpt.isDefined) traverse(leftOpt.get) else List[Node]()
        val rightNodes = if (rightOpt.isDefined) traverse(rightOpt.get) else List[Node]()
        (List(x) ++ leftNodes ++ rightNodes).sortBy{ x=> x.id }
    }

    def nodeStats(nodes:List[Node]):List[NodeStats] = {
        // find parents of all nodes
        val prev:List[NodeStats] = nodes.map{
            // node:Int, left:Int, right:Int, isLeaf:Boolean, parent:Int = -1)
            n:Node => NodeStats( n.id, 
                        if (n.leftNode.isDefined) n.leftNode.get.id else -1,
                        if (n.rightNode.isDefined) n.rightNode.get.id else -1,
                        n.isLeaf)
        }

        prev.map{
            ns:NodeStats => 
            val me = ns.node
            // find nodestat whose left node is me
            val l = prev.filter{ lns:NodeStats => lns.left == me }
            val r = prev.filter{ rns:NodeStats => rns.right == me }
            NodeStats(ns.node, ns.left, ns.right, ns.isLeaf, 
                {if(l.size > 0) l.head.node else if (r.size > 0) r.head.node else -1}
            )
        }
    }

    // convert text data to schema rows
    val conf = new SparkConf().setAppName("Decision Tree Job")
    val sc = new SparkContext(conf)
    val myargs = Args(args.mkString)
    val inputFile = myargs("input")
    val data = sc.textFile(inputFile)
    val rows:RDD[schema] = data.map{str2schema} 
    
    val uniqueDim:Map[Int,List[String]] = (14 until n)
    .map { idx => (idx, uniqueWords(rows.map{ x=> x.rest(idx)})) }
    .toMap
    val unique_campaign_name:List[String] = uniqueWords(rows.map{ x => x.campaign_name})
    val unique_publisher_group_name:List[String] = uniqueWords(rows.map{ x => x.publisher_group_name})

    val campaignMap = unique_campaign_name.zipWithIndex.toMap
    val publisherMap = unique_publisher_group_name.zipWithIndex.toMap
    val map21 = uniqueDim(21).zipWithIndex.toMap
    val map23 = uniqueDim(23).zipWithIndex.toMap
    val map24 = uniqueDim(24).zipWithIndex.toMap

    // optional step - persist unique words for debugging purposes
    List((campaignMap,"campaignMap"),
     (publisherMap, "publisherMap"),
     (map21,"map21"),
     (map23, "map23"),
     (map24, "map24"))
    .foreach{m=>
        persist(m._1, m._2)
    }

    (14 until n)
    .foreach{ idx => persist(uniqueDim(idx), "unique_dim" + idx) }
    persist(unique_campaign_name, "unique_campaign")
    persist(unique_publisher_group_name, "unique_publisher_group_name")

    val input:RDD[SchemaVector] = rows.map{ row =>
        val label = row.revenuePerClick // THE TARGET, numerical ergo use regression trees.
        val featureArraySize = 7
        val indices = Array.tabulate[Int](7){i=>i}
        val values = Array(
            row.matchToNum, // 0
            campaignMap(row.campaign_name), // 1
            publisherMap(row.publisher_group_name), // 2
            map21(row.rest(21)), // 3
            map23(row.rest(23)), // 4
            map24(row.rest(24)), // 5
            row.quality_score // 6
        )
        val vector = new SparseVector(featureArraySize, indices, values)
        SchemaVector(row, LabeledPoint(label, vector))
    }

    // build decision tree
    val impurity = "variance"
    val maxDepth = myargs("maxdepth").toInt
    val maxBins = 3+campaignMap.size+publisherMap.size + map21.size + map23.size + map24.size
    val categoricalFeaturesInfo:Map[Int, Int] = Map(
        0->3, // 3 match types 
        1->campaignMap.size, 
        2->publisherMap.size,
        3->map21.size,
        4->map23.size,
        5->map24.size
    )

    val splits = input.randomSplit(Array(0.6, 0.4), seed = 11L)
    val training = splits(0).cache().map{sv=>sv.v}
    val test = splits(1).map{sv=>sv.v}
    
    val decisionTreeModel = DecisionTree.trainRegressor(training, categoricalFeaturesInfo, impurity, maxDepth, maxBins)
   
   // Compute raw scores on the test set. 
    val scoreAndLabels = test.map { point =>
      val score = decisionTreeModel.predict(point.features)
      (score, point.label)
    }

    // Get evaluation metrics.
    val metrics = new RegressionMetrics(scoreAndLabels)
    persist( List("rsquared" + metrics.r2, "explained Variance" + metrics.explainedVariance, "rmse" + metrics.rootMeanSquaredError), "evaluation")

    // traverse the tree
    val nodes = traverse(decisionTreeModel.topNode)
    persist(nodes.map{x=>x.toString}, "nodes")
    
    val nodestats = nodeStats(nodes)
    persist(nodestats.map{x=>x.toString}, "nodeStats")
    
    val predictionMap = nodes.map{ n=> (n.predict.predict, n.id+"_"+n.isLeaf)}.toMap

    // keywordId, trainingLabel, validationLabel, predict, clusterId, boost(clusterPredict/folderPredict)
    input.map { sv:SchemaVector =>
        val (row, point) = (sv.s, sv.v)
        val predict = decisionTreeModel.predict(point.features)
        val kw_id = row.keyword_instance_id
        val trainingLabel = row.revenuePerClick
        val folderPredict = row.folderRevenuePerClick
        val boost = 100*predict/folderPredict
        val nodeId = predictionMap.getOrElse(predict, -1)
        (kw_id, trainingLabel, predict, nodeId, boost)
    }    
    .saveAsTextFile("results")

    // Is pruning necessary ?
    val pruneStats = input.map { sv:SchemaVector =>
        val (row, point) = (sv.s, sv.v)
        val predict = decisionTreeModel.predict(point.features)
        val kw_id = row.keyword_instance_id
        val nodeId = predictionMap.getOrElse(predict, -1)
        (row, kw_id, nodeId)
    }
    .groupBy{ x=> x._3 } // group by node id
    .map{ x=>
        val (gp, iter) = x
        val list = iter.toList
        val numKeywords = list.size
        val numClicks = list.map{ x=> x._1.clicks }.sum
        (gp, numKeywords, numClicks)
    }


    pruneStats
    .saveAsTextFile("prunestats")

    val toBePruned = pruneStats
    .filter{ x=> x._2 < 10 || x._3 < 500 }

    toBePruned
    .saveAsTextFile("tobepruned")
}