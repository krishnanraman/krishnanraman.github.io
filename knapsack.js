// my colors
var orange='rgba(255,140,0,1)'
var green= 'rgba(0,0,128,1)'
var red='rgba(255,0,0,1)';
var black='rgba(0,0,0,1)';  
var lightblue = 'rgba(0,0,255,1)'
var blue = 'rgba(0,0,128,1)'
var brown = 'rgba(165,42,42,1)'
var white = 'rgba(255,255,255,1)'
var peach = 'rgba(255,230,179,1)'
var colors = [orange,green,red,blue,black,lightblue,brown]

var xmax = window.innerWidth-20
var ymax = window.innerHeight-20

var canv = document.createElement('canvas')
canv.width = xmax
canv.height = ymax
document.body.appendChild(canv)
canv.focus(); 

var ctx = canv.getContext('2d')

ctx.fillStyle =peach 
ctx.fillRect(2,2,xmax-2, ymax-2)
ctx.strokeStyle=blue
ctx.beginPath()
ctx.rect(0,0,xmax,ymax)
ctx.stroke()
ctx.closePath()

let dataWeights = []
let dataPrices = []
var w = 200 // CONTROL FROM textfield maxweight: 70*1 + 30*8
var n = 100
var a = 40
var b = 70
let resW = []
let resP = []

dataWeights[n-1] = 0
dataPrices[n-1] = 0

function doSetup() {
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

function drawGallery() {
	var pw = 100
	var ph = 50
	var hgap = Math.floor((xmax - 10*pw)/11)
	var vgap = Math.floor((ymax - 10*ph)/11)
	for(i=0;i<10;i++) {
		for(j=0;j<10;j++) {
			var r = colors[Math.floor(Math.random() * colors.length)]
			ctx.strokeStyle = r
			var x = (j+1)*hgap + j*pw
			var y = (i+1)*vgap + i*ph
			ctx.beginPath()
			ctx.rect(x,y,pw,ph)
			ctx.stroke()
			ctx.closePath()
		}	
	}	
}

function doMCMC() {
	doSetup()
	resW = doGibbs(dataWeights)
	resP = doGibbs(dataPrices)
	drawGallery()
}





