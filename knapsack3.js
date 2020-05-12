document.getElementById("status").value = "Hit the Run MCMC button..."
let dataWeights = []
let dataPrices = []
var maxweight = 300 // maxweight < b*poissonW1 + (n-b)*poissonW2
var n = 100
var a = 40
var b = 70
var N = 5000
var burnin = 1000
var totalTimes = 100
var poissonW1 = 3
var poissonW2 = 6
var poissonP1 = 2
var poissonP2 = 5
var gibbsfail = 0

let resW = []
let resP = []
var totalWeightSk = 0
var totalEarningSk = 0

var totalWeightMC = 0
var totalEarningMC = 0

var totalWeightGp = 0
var totalEarningGp = 0

var totalWeightGw = 0
var totalEarningGw = 0

var totalWeightGr = 0
var totalEarningGr = 0

var totalWeightPt = 0
var totalEarningPt = 0

var timesEarningMC = []
var timesWeightMC = []
var timesEarningSk = []
var timesWeightSk = []
var timesEarningGp = []
var timesWeightGp = []
var timesEarningGw = []
var timesWeightGw = []
var timesEarningGr = []
var timesWeightGr= []
var timesEarningPt = []
var timesWeightPt= []

function reset() {
	totalWeightSk = 0
	totalEarningSk = 0
	totalWeightMC = 0
	totalEarningMC = 0
	totalWeightGp = 0
	totalEarningGp = 0
	totalWeightGw = 0
	totalEarningGw = 0
	totalWeightGr = 0
	totalEarningGr = 0
	totalWeightPt = 0
	totalEarningPt = 0

	resW = []
	resP = []
}

// try to deliver a nonzero poisson if you can
// may still be 0, btw
function nonzeroPoisson(lambda) {
	var s = jStat.poisson.sample(lambda)
	if (s==0) {
		s = jStat.poisson.sample(lambda)
	} 
	return(s)
}

function doSetup() {
	for(i=0;i<b;i++) {
		dataWeights[i] = nonzeroPoisson(poissonW1) 
	}
	for(i=b;i<n;i++) {
		dataWeights[i] = nonzeroPoisson(poissonW2)
	}
	for(i=0;i<a;i++) {
		dataPrices[i] = nonzeroPoisson(poissonP1)
	}
	for(i=a;i<n;i++) {
		dataPrices[i] = nonzeroPoisson(poissonP2)
	}
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function doSkeptic() {
	for(i=0;i<10;i++) {
		for(j=0;j<10;j++) {
			var r = Math.random()
			var idx = 10*i + j
			if (r > 0.5 && (totalWeightSk + dataWeights[idx]) < maxweight) {
				totalWeightSk += dataWeights[idx]
				totalEarningSk += dataPrices[idx]
			}
		}	
	}	
}

// steal from expensive to cheap
function doGreedyPrice() {
	// make a copy
	var p2 = dataPrices.slice(0,dataPrices.length)
	// reverse sort the copy inplace. get the indices
	var pidx = sortWithIndices(p2).sortIndices.reverse()
	// use the indices to get weights & prices
	for(i=0;i<pidx.length;i++) {
		var idx = pidx[i]
		if ((totalWeightGp + dataWeights[idx]) < maxweight) {
				totalWeightGp += dataWeights[idx]
				totalEarningGp += dataPrices[idx]
		}
	}
}

// steal from expensive ratio to cheap
function doGreedyRatio() {
	// make a copy
	var rat = []
	for(i=0;i<dataPrices.length;i++) {
		rat[i] = dataPrices[i]/dataWeights[i]
	}
	// reverse sort the copy inplace. get the indices
	var pidx = sortWithIndices(rat).sortIndices.reverse()
	// use the indices to get weights & prices
	for(i=0;i<pidx.length;i++) {
		var idx = pidx[i]
		if ((totalWeightGr + dataWeights[idx]) < maxweight) {
				totalWeightGr += dataWeights[idx]
				totalEarningGr += dataPrices[idx]
		}
	}
}

// pick anything above a certain price while meeting weight
function doPriceThreshold() {
	// find half max price
	var threshold = jStat.max(dataPrices)/3
	for(i=0;i<dataPrices.length;i++) {
		if ((dataPrices[i] >= threshold) && 
			(totalWeightPt + dataWeights[i]) < maxweight) {
				totalWeightPt += dataWeights[i]
				totalEarningPt += dataPrices[i]
		}
	}
}

// step from lightweight to heavy
function doGreedyWeight() {
	// make a copy
	var p2 = dataWeights.slice(0,dataWeights.length)
	// sort the copy inplace. get the indices
	var pidx = sortWithIndices(p2).sortIndices
	// use the indices to get weights & prices
	for(i=0;i<pidx.length;i++) {
		var idx = pidx[i]
		if ((totalWeightGw + dataWeights[idx]) < maxweight) {
				totalWeightGw += dataWeights[idx]
				totalEarningGw += dataPrices[idx]
		}
	}
}

function doKnapsack() {
	var aEst = resP[0]
	var alphaEst = resP[1]
	var betaEst = resP[2]
	var bEst = resW[0]
	var sigmaEst = resW[1]
	var thetaEst = resW[2]
	
 	if (maxweight > (n-aEst)*thetaEst) {
 		var wprime = maxweight - (n-aEst)*thetaEst
 		var c = Math.floor(wprime/sigmaEst)
 		var aminusc = aEst - c
 		// skip aminusc, steal rest
		for(i=0;i<10;i++) {
			for(j=0;j<10;j++) {
				var r = Math.random()
				var idx = 10*i + j
				if ((idx > aminusc) && (totalWeightMC + dataWeights[idx]) < maxweight) {
					totalWeightMC += dataWeights[idx]
					totalEarningMC += dataPrices[idx]
				}
			}	
		}	

 	} else {
 		// skip a, steal as many as possible in n-a
 		for(i=0;i<10;i++) {
			for(j=0;j<10;j++) {
				var idx = 10*i + j
				if ((idx > aEst) && (totalWeightMC + dataWeights[idx]) < maxweight) {					
					totalWeightMC += dataWeights[idx]
					totalEarningMC += dataPrices[idx]
				}
			}	
		}	

 	}
}

async function doMCMC1000() {
	document.getElementById("btn2").disabled = true
	document.getElementById("status").value = "Running " + totalTimes + " Realizations, please be patient..."
	await sleep(2000)
	var worker1 = new Worker("gibbsworker.js")
	var worker2 = new Worker("gibbsworker.js")

	for(times=0;times<totalTimes;times++) {
		reset()	
		doSetup()

		var w1 = false
		var w2 = false
		var gibbsFailed = false

		worker1.postMessage([dataWeights,N,burnin])
		worker2.postMessage([dataPrices,N,burnin])
		worker1.onmessage = function(e) {
			resW = e.data
			if (isNaN(resW[0]) || isNaN(resW[1]) || isNaN(resW[2]) ) {
				resW = [b,poissonW1-Math.random()*0.1,poissonW2-Math.random()*0.1,1 - Math.random()*0.1]
				gibbsfail++
				console.log(gibbsfail)
				gibbsFailed = true
			}
			w1 = true
		}
		worker2.onmessage = function(e) {
			resP = e.data
			if (isNaN(resP[0]) || isNaN(resP[1]) || isNaN(resP[2]) ) {
				//console.log("Price Gibbs did not converge")
				resP = [a,poissonP1-Math.random()*0.1,poissonP2-Math.random()*0.1,1 - Math.random()*0.1]
				gibbsfail++
				console.log(gibbsfail)
				gibbsFailed = true
			}
			w2 = true
		}
		

		while(!w1 && !w2) {await(sleep(100))}
		doSkeptic()
		doKnapsack()
		doGreedyPrice()
		doGreedyWeight()
		doGreedyRatio()
		doPriceThreshold()

		timesWeightSk[times] = totalWeightSk
		timesEarningSk[times] = totalEarningSk

		timesEarningMC[times] = totalEarningMC
		timesWeightMC[times] = totalWeightMC

		timesEarningGp[times] = totalEarningGp
		timesWeightGp[times] = totalWeightGp

		timesEarningGw[times] = totalEarningGw
		timesWeightGw[times] = totalWeightGw

		timesEarningGr[times] = totalEarningGr
		timesWeightGr[times] = totalWeightGr

		timesEarningPt[times] = totalEarningPt
		timesWeightPt[times] = totalWeightPt		

		// occasional race conditions, or Gibbs convergence failed
		if(totalEarningMC == 0 || totalWeightMC == 0 || gibbsFailed) {
			times = times -1 // repeat iteration
		}
		document.getElementById("status").value += "."
	}
	worker1.terminate()
	worker2.terminate()
	console.log("Gibbs Failed: " + gibbsfail + " out of " + 2*totalTimes)
	var text = "" + n + " Paintings, Knapsack max weight:" + maxweight + " lbs, Realizations: " + totalTimes + "\n" +
	stats(timesWeightSk, "Random Algo, Weight:") +
	stats(timesWeightMC, "MCMC Algo,   Weight:") +
	stats(timesWeightGp, "GreedyPrice ,Weight:") +
	stats(timesWeightGw, "GreedyWeight ,Weight:") +
	stats(timesWeightGr, "GreedyRatio ,Weight:") +
	stats(timesWeightPt, "PriceThreshold ,Weight:") + "\n" +
	stats(timesEarningSk, "Random Algo, Earning:") +
	stats(timesEarningMC, "MCMC Algo:   Earning:") + 
	stats(timesEarningGp, "GreedyPrice ,Earning:") +
	stats(timesEarningGw, "GreedyWeight,Earning:") +
	stats(timesEarningGr, "GreedyRatio, Earning:") +
	stats(timesEarningPt, "PriceThreshold ,Earning:")
	document.getElementById("status").value = text
	document.getElementById("btn2").disabled = false
}

function stats(array, name) {
	return("\n"+ name + 
	"[min, max, mean, total]: ["+ 
	jStat.min(array) + ","+
	jStat.max(array) +"," +
	jStat.mean(array)+","+
	jStat.sum(array) +
	 "]")  
}