var a=0,b=0,c=0,d=0,num=0,denom=0;
var correct = 0;
var incorrect = 0;
var count = 0;
var total = 10;
var begintime = performance.now();

var xinput = new CanvasInput({
  canvas: document.getElementById('canvas'),
  x:400,
  y:10,
  fontSize: 72,
  fontFamily: 'Serif',
  fontColor: '#FF0000',
  fontWeight: 'bold',
  width: 200,
  padding: 8,
  borderWidth: 1,
  borderColor: '#000',
  borderRadius: 3,
  boxShadow: '1px 1px 0px #fff',
  innerShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
  placeHolder: '0',
  onsubmit: function() {yinput.focus();},
});

var yinput = new CanvasInput({
  canvas: document.getElementById('canvas'),
  x:400,
  y:210,
  fontSize: 72,
  fontFamily: 'Serif',
  fontColor: '#FF0000',
  fontWeight: 'bold',
  width: 200,
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

  if (yans == ' ' || yans.length == 0)
    yans = 1

  if (xans == ' ' || xans.length == 0)
    xans = 0

  if (xans == 0 && num == xans) {
    correct += 1;
  } else if (yans == 1 && num == xans) {
    correct += 1;
  } else if (xans == num && yans == denom) {
    correct += 1;
  } else if (xans/yans - num/denom < 0.0001 ) {
    correct += 1;
  } else {
    incorrect += 1;
    draw("Sorry!", 10,100)
    draw(""+ num + "/" + denom, 10,200)
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
    var req = "http://45.56.113.224:8080/score?game=Fraction-Subtraction&score="+percent+"&duration="+secs
    xhr.open('GET', req, false);
    xhr.send();

  } else {
    repeat();
  }
}

function repeat() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.clearRect(0,0,800,600);
  a = rnd(1,9);
  b = rnd(1,9);
  c = rnd(1,9);
  d = rnd(1,9);
  num = a*d - b*c;
  denom = b*d;
  if ((num > 0) && (num % denom == 0)) {
    num = num/denom
    denom = 1
  }
  draw("" + a + "     " + c, 10, 100)
  draw("" + "-- - -- =------", 10, 200)
  draw("" + b + "     " + d, 10, 300)
  xinput.value('');
  yinput.value('1');
  xinput.focus();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

repeat();

