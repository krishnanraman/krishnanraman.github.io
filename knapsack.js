
/*  R code
data = c(rpois(70,1.0), rpois(30,8.0))
n = length(data)
nminus1 = n - 1
N = 10000
lambda_init = 5
lambda1 = lambda_init
lambda2 = lambda_init
xsum = cumsum(data)[1:nminus1]
xtotal = sum(data)
alpha = 1
simulations = matrix(0, nrow=N, ncol=4)
colnames(simulations) <- c("theta", "alpha", "lambda1", "lambda2")
logp = c()

for(i in 1:N) {
  logp = xsum*log(lambda1)-lambda1*seq(1,nminus1) + (xtotal-xsum)*log(lambda2)-lambda2*seq(nminus1,1)
  p = exp(logp)/sum(exp(logp))
  theta = sample(1:nminus1,1,prob=p)
  lambda1 = rgamma(1,shape=5+xsum[theta],rate=alpha+theta)
  lambda2 = rgamma(1,shape=5+xtotal-xsum[theta],rate=alpha+n-theta)
  alpha = rgamma(1,shape=10+2*lambda_init,rate=10+lambda1+lambda2)
  
  # populate matrix
  simulations[i,] = c(theta,alpha, lambda1, lambda2) 
}

J = 2000
*/
let dataWeights = []
let dataPrices = []
var w = 200 // CONTROL FROM textfield maxweight: 70*1 + 30*8
var n = 100
var a = 40
var b = 70

dataWeights[n-1] = 0
dataPrices[n-1] = 0

for(i=0;i<b;i++) {
	dataWeights[i] = jStat.poisson.sample(1)
}
for(i=b;i<n;i++) {
	dataWeights[i] = jStat.poisson.sample(8)
}
for(i=0;i<a;i++) {
	dataPrices[i] = jStat.poisson.sample(2.5)
}
for(i=a;i<n;i++) {
	dataPrices[i] = jStat.poisson.sample(7.5)
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

function doGibbs(data) {
	var n = data.length
	var nminus1 = n - 1
	var xsum = jStat.cumsum(data.slice(0,nminus1))
	var xtotal = jStat.sum( data )
	var alpha = 1
	var N = 10000
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
		var pidx = sortWithIndices(p).sortIndices
		var sortedp = p.sort()
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

	thetaEstimate = jStat.mean(thetaArray.slice(2000,N))
	lambda1Estimate = jStat.mean(lambda1Array.slice(2000,N))
	lambda2Estimate = jStat.mean(lambda2Array.slice(2000,N))
	alphaEstimate = jStat.mean(alphaArray.slice(2000,N))

	return [thetaEstimate, lambda1Estimate, lambda2Estimate,alphaEstimate ]
}

resW = doGibbs(dataWeights)
document.writeln(resW)
resP = doGibbs(dataPrices)
document.writeln(resP)

