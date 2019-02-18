var a=0,b=0,c=0,d=0,e=0,f=0;
var correct = 0;
var incorrect = 0;
var count = 0;
var total = 10;
var begintime = performance.now();

var xinput = new CanvasInput({
  canvas: document.getElementById('canvas'),
  x:250,
  y:10,
  fontSize: 72,
  fontFamily: 'Serif',
  fontColor: '#FF0000',
  fontWeight: 'bold',
  width: 180,
  padding: 8,
  borderWidth: 1,
  borderColor: '#000',
  borderRadius: 3,
  boxShadow: '1px 1px 0px #fff',
  innerShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
  placeHolder: '0',
  onsubmit: function() {answer(xinput.value(), yinput.value());},
});

var yinput = new CanvasInput({
  canvas: document.getElementById('canvas'),
  x:250,
  y:210,
  fontSize: 72,
  fontFamily: 'Serif',
  fontColor: '#FF0000',
  fontWeight: 'bold',
  width: 180,
  padding: 8,
  borderWidth: 1,
  borderColor: '#000',
  borderRadius: 3,
  boxShadow: '1px 1px 0px #fff',
  innerShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
  placeHolder: '1',
  onsubmit: function() {answer(xinput.value(), yinput.value());},
});

function rnd(min, max) {
  return min + Math.floor(Math.random() * Math.floor(max-min));
}

function draw(text, x, y) {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.font = '128px serif';
  ctx.fillStyle = '#0d00ff';
  ctx.fillText(text, x,y);
}

async function answer(xans,yans) {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.clearRect(0,0,800,600);

  if (xans == ' ' || xans.length == 0)
    xans = 0

  if ((xans/yans > a/b) && (xans/yans < e/f)) {
    correct += 1;
  } else {
    incorrect += 1;
    draw("Sorry!", 10,100)
    draw(""+ c + "/" + d, 10,200)
    await sleep(2000)
  }

  count += 1;


  if (count == total) {
    xinput.destroy();
    yinput.destroy();
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.clearRect(0,0,800,600);
    var percent = correct*100/total;
    draw("Score: " + percent + " % ", 10,100)

    var endtime = performance.now()
    var secs = Math.round((endtime - begintime)/1000)
    draw("Time: " + secs + " sec", 10,200)

    var xhr = new XMLHttpRequest();
    var req = "http://45.56.113.224:8080/score?game=Complete-Fraction&score="+percent+"&duration="+secs
    xhr.open('GET', req, false);
    xhr.send();


  } else {
    repeat();
  }
}

function common_mult(x,y) {
  var sm,bi;
  if (x < y) {
    sm = x
    bi = y
  } else {
    sm = y
    bi = x
  }

  var notdone = true
  var lastrem = 0
  while(notdone) {
    lastrem = bi%sm
    //alert(""  + sm + "," + bi + "," + lastrem)
    bi = sm
    sm = lastrem
    if (lastrem == 0) {
      notdone = false
    }
  }
  return bi
}

function repeat() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.clearRect(0,0,800,600);
  c = rnd(1,9);
  d = rnd(c+2,13);
  var m = rnd(2,6);
  a = rnd(2,c*m - 1);
  var n = rnd(2,6);
  e = c*n + rnd(1,4);
  b = d*m
  f = d*n

  //alert("" + a+ "," + b + "," + c + "," + d + "," + e + "," + f)

  // try to simplify
  var ab = common_mult(a,b)
  var ef = common_mult(e,f)
  //alert("" + ab + "," + ef)
  if (ab > 1) {
    a = a/ab
    b = b/ab
  }

  
  if (ef > 1) {
    e = e/ef
    f = f/ef
  }

  draw("" + a, 10, 100)
  draw("" + b, 10, 300)
  xinput.value('');
  yinput.value(""+d);
  xinput.focus();
  draw("" + e, 580, 100)
  draw("" + "--- < ---- < ---", 10, 200)
  draw("" + f, 580, 300)
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

repeat();

