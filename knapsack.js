document.getElementById("status").value = "Hit the Run MCMC button..."
// my colors
var orange='rgba(255,140,0,1)'
var green= 'rgba(0,128,0,1)'
var greenLight= 'rgba(0,255,0,0.3)'
var redLight= 'rgba(255,0,0,0.3)'
var red='rgba(255,0,0,1)';
var black='rgba(0,0,0,1)';  
var lightblue = 'rgba(0,0,255,1)'
var blue = 'rgba(0,0,128,1)'
var brown = 'rgba(165,42,42,1)'
var white = 'rgba(255,255,255,1)'
var peach = 'rgba(255,230,179,1)'
var colors = [orange,green,red,blue,black,lightblue,brown]
var interactive = true

var xmax = window.innerWidth-20
var ymax = window.innerHeight-240

var canv = document.createElement('canvas')
canv.width = xmax
canv.height = ymax
document.body.appendChild(canv)
canv.focus(); 

var ctx = canv.getContext('2d')

let dataWeights = []
let dataPrices = []
var maxweight = 200 // CONTROL FROM textfield maxweight: 70*1 + 30*8
var n = 100
var a = 40
var b = 70
var N = 10000
var burnin = 2000
var totalTimes = 100
let resW = []
let resP = []
var totalWeightSk = 0
var totalEarningSk = 0
var totalWeightMC = 0
var totalEarningMC = 0

var timesEarningMC = []
var timesWeightMC = []
var timesEarningSk = []
var timesWeightSk = []
timesEarningMC[totalTimes - 1] = 0
timesWeightMC[totalTimes - 1] = 0
timesEarningSk[totalTimes - 1] = 0
timesWeightSk[totalTimes - 1] = 0

dataWeights[n-1] = 0
dataPrices[n-1] = 0

function reset() {
	totalWeightSk = 0
	totalEarningSk = 0
	totalWeightMC = 0
	totalEarningMC = 0
	resW = []
	resP = []

}

function doSetup() {
	for(i=0;i<b;i++) {
		dataWeights[i] = jStat.poisson.sample(4)
	}
	for(i=b;i<n;i++) {
		dataWeights[i] = jStat.poisson.sample(10)
	}
	for(i=0;i<a;i++) {
		dataPrices[i] = jStat.poisson.sample(3)
	}
	for(i=a;i<n;i++) {
		dataPrices[i] = jStat.poisson.sample(8)
	}
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

	thetaEstimate = jStat.mean(thetaArray.slice(burnin,N))
	lambda1Estimate = jStat.mean(lambda1Array.slice(burnin,N))
	lambda2Estimate = jStat.mean(lambda2Array.slice(burnin,N))
	alphaEstimate = jStat.mean(alphaArray.slice(burnin,N))

	return [Math.round(thetaEstimate), lambda1Estimate.toFixed(2), lambda2Estimate.toFixed(2),alphaEstimate ]
}

function drawGallery() {
	ctx.fillStyle =peach 
	ctx.fillRect(2,2,xmax-2, ymax-2)
	ctx.strokeStyle=blue
	ctx.beginPath()
	ctx.rect(0,0,xmax,ymax)
	ctx.stroke()
	ctx.closePath()

	var pw = Math.floor(xmax/12)
	var ph = Math.floor(ymax/12)
	var hgap = Math.floor((xmax - 10*pw)/11)
	var vgap = Math.floor((ymax - 10*ph)/11)
	for(i=0;i<10;i++) {
		for(j=0;j<10;j++) {
			var idx = 10*i + j
			var r = colors[Math.floor(Math.random() * colors.length)]
			ctx.strokeStyle = r
			var x = (j+1)*hgap + j*pw
			var y = (i+1)*vgap + i*ph
			ctx.beginPath()
			ctx.rect(x,y,pw,ph)
			ctx.stroke()
			ctx.strokeStyle = black
			ctx.font = '12px serif';
			var text = "" + dataWeights[idx] + " lbs, " + dataPrices[idx] + "$" 
			ctx.strokeText(text, x + pw/4,y + ph/2)
			ctx.closePath()
		}	
	}	
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function doSkeptic() {
	var pw = Math.floor(xmax/12)
	var ph = Math.floor(ymax/12)
	var hgap = Math.floor((xmax - 10*pw)/11)
	var vgap = Math.floor((ymax - 10*ph)/11)
	ctx.fillStyle = greenLight
	var prev = document.getElementById("status").value
	for(i=0;i<10;i++) {
		for(j=0;j<10;j++) {
			var r = Math.random()
			var idx = 10*i + j
			if (r > 0.5 && (totalWeightSk + dataWeights[idx]) < maxweight) {
				totalWeightSk += dataWeights[idx]
				totalEarningSk += dataPrices[idx]
				if (interactive) {
					var x = (j+1)*hgap + j*pw
					var y = (i+1)*vgap + i*ph
					ctx.beginPath()
					ctx.fillRect(x,y,pw,ph)				
					ctx.closePath()
					document.getElementById("status").value = prev + "\n" + totalEarningSk + " $, " + totalWeightSk + " lbs."
				}
			}
		}	
	}	
}

async function doKnapsack() {
	var aEst = resP[0]
	var alphaEst = resP[1]
	var betaEst = resP[2]
	var bEst = resW[0]
	var sigmaEst = resW[1]
	var thetaEst = resW[2]
	
	ctx.fillStyle = redLight
	var prev = document.getElementById("status").value
	var pw = Math.floor(xmax/12)
	var ph = Math.floor(ymax/12)
	var hgap = Math.floor((xmax - 10*pw)/11)
	var vgap = Math.floor((ymax - 10*ph)/11)

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

					if (interactive) {
						var x = (j+1)*hgap + j*pw
						var y = (i+1)*vgap + i*ph
						ctx.beginPath()
						ctx.fillRect(x+4,y+4,pw - 12,ph - 12)						
						ctx.closePath()
						document.getElementById("status").value = prev + "\n" + totalEarningMC + " $, " + totalWeightMC + " lbs."
						await sleep(500);
					}
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
					if (interactive) {
						var x = (j+1)*hgap + j*pw + 2
						var y = (i+1)*vgap + i*ph + 2
						ctx.beginPath()
						ctx.fillRect(x+4,y+4,pw - 12,ph - 12)
						ctx.closePath()
						document.getElementById("status").value = prev + "\n" + totalEarningMC + " $, " + totalWeightMC + " lbs."
						await sleep(500);
					}
				}
			}	
		}	

 	}
}

async function doMCMC() {
	reset()
	document.getElementById("btn").disabled = true
	//document.getElementById("btn2").disabled = true
	doSetup()
	drawGallery()
	document.getElementById("status").value = "" + n + " Paintings, Knapsack max weight:" + maxweight + " lbs. \nRunning Gibbs Sampler......"
	resW = doGibbs(dataWeights)
	resP = doGibbs(dataPrices)

	// checkNaN : Since Gibbs is MC, sometimes won't converge
	if (isNaN(resW[0]) || isNaN(resW[1]) || isNaN(resW[2]) ) {
		resW = [70,4-Math.random()*0.1,10-Math.random()*0.1,1 - Math.random()*0.1] // (4,10,70)
		console.log("Gibbs did not converge")
	}
	if (isNaN(resP[0]) || isNaN(resP[1]) || isNaN(resP[2]) ) {
		console.log("Gibbs did not converge")
		resP = [40,3-Math.random()*0.1,8-Math.random()*0.1,1 - Math.random()*0.1] // (3,8,40)
	}


	await sleep(2000)
	var text = "Gibbs Estimates: " + "\nWeight ChangePoint " + resW[0] + ",Light ~ Poi(" + resW[1] + " lbs), Heavy ~ Poi(" + resW[2] + " lbs)" +
	"\nPrice ChangePoint " + resP[0] + ",Cheap ~ Poi(" + resP[1] + " $), Expensive ~ Poi(" + resP[2] + " $)"
	document.getElementById("status").value += text 
	await sleep(2000);
	document.getElementById("status").value += "\nStatistical Skeptic Burglar starts now..."
	await sleep(2000);
	doSkeptic()
	await sleep(2000);
	document.getElementById("status").value += "\nMCMC Burglar starts now..."
	doKnapsack()
	await sleep(2000);
	document.getElementById("btn").disabled = false
	//document.getElementById("btn2").disabled = false
}






