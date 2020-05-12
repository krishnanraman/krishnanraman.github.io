onmessage = function(e) {
	importScripts("jstat.js")
	var data = e.data[0]
	var N = e.data[1]
	var burnin = e.data[2]
	var n = data.length
	var nminus1 = n - 1
	var xsum = jStat.cumsum(data.slice(0,nminus1))
	var xtotal = jStat.sum( data )
	var alpha = 1
	let thetaArray = []
	let alphaArray = []
	let lambda1Array = []
	let lambda2Array = []
	let logp = []

	var lambda_init = 5
	var lambda1 = lambda_init
	var lambda2 = lambda_init

	thetaArray[N-1] = 0
	alphaArray[N-1] = 0
	lambda1Array[N-1] = 0
	lambda2Array[N-1] = 0

	for(i=0;i<N;i++) {
		for(j=0;j<nminus1;j++) {
			var aa = xsum[j]*Math.log(lambda1)
			var ba = lambda1*(j+1)
			var ca = (xtotal-xsum[j])*Math.log(lambda2)
			var da = lambda2*(nminus1-j)
			logp[j] = aa - ba + ca - da		
		}
		var exp = jStat(logp).exp()[0]
		var sumexp = jStat.sum(exp)
		var p = jStat(exp).divide(sumexp)[0]
		var si = sortWithIndices(p)
		var pidx = si.sortIndices
		var sortedp = si
		var u = jStat.uniform.sample(0,1)
		var accum = 0
		var theta = 0
		var pl = sortedp.length
		for(k=0;k<pl;k++) {
			accum = accum + sortedp[k] 
			if(u < accum) {
				theta = 1 + pidx[k]
			}
		}

	    lambda1 = jStat.gamma.sample(5+xsum[theta],1.0/(alpha+theta))
	    lambda2 = jStat.gamma.sample(5+xtotal-xsum[theta],1.0/(alpha+n-theta))
	    alpha = jStat.gamma.sample(10+2*lambda_init,1.0/(10+lambda1+lambda2))
	  	
	  	thetaArray[i] = theta
	  	lambda1Array[i] = lambda1
	  	lambda2Array[i] = lambda2
	  	alphaArray[i] = alpha
	}

	thetaEstimate = jStat.mean(thetaArray.slice(burnin,N))
	lambda1Estimate = jStat.mean(lambda1Array.slice(burnin,N))
	lambda2Estimate = jStat.mean(lambda2Array.slice(burnin,N))
	alphaEstimate = jStat.mean(alphaArray.slice(burnin,N))

	res = [Math.round(thetaEstimate), lambda1Estimate.toFixed(2), lambda2Estimate.toFixed(2),alphaEstimate ]
	postMessage(res)
}

function sortWithIndices(toSort) {
  for (var i = 0; i < toSort.length; i++) {
    toSort[i] = [toSort[i], i];
  }
  toSort.sort(function(left, right) {
    return left[0] < right[0] ? -1 : 1;
  });
  toSort.sortIndices = [];
  for (var j = 0; j < toSort.length; j++) {
    toSort.sortIndices.push(toSort[j][1]);
    toSort[j] = toSort[j][0];
  }
  return toSort;
}