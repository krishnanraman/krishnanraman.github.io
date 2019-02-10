var c = 0;
var correct = 0;
var incorrect = 0;
var count = 0;
var total = 10;
var begintime = performance.now();

var input = new CanvasInput({
  canvas: document.getElementById('canvas'),
  x:300,
  y:200,
  fontSize: 128,
  fontFamily: 'Serif',
  fontColor: '#FF0000',
  fontWeight: 'bold',
  width: 300,
  padding: 8,
  borderWidth: 1,
  borderColor: '#000',
  borderRadius: 3,
  boxShadow: '1px 1px 0px #fff',
  innerShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
  placeHolder: '0',
  onsubmit: function() {answer(input.value());},
});

function rnd(min, max) {
  return min + Math.floor(Math.random() * Math.floor(max-min));
}

function draw(text, x, y, font, fill) {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = font
  ctx.fillStyle = fill;
  ctx.fillText(text, x,y);
}

function drawline(x1, y1, x2,y2) {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.beginPath();       // Start a new path
  ctx.moveTo(x1,y1);    // Move the pen to (30, 50)
  ctx.lineTo(x2,y2);  // Draw a line to (150, 100)
  ctx.lineWidth = 10;
  ctx.stroke(); 
}

async function answer(ans) {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.clearRect(0,0,800,600);
  
if (Math.abs(ans - c) < 0.5) {
    correct += 1;
  } else {
    incorrect += 1;
    draw("Sorry!", 10,100)
    draw("Ans: " + c, 10,200)
    await sleep(2000)
  }
  count += 1;

  if (count == total) {
    input.destroy();
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.clearRect(0,0,800,600);
    var percent = correct*100/total;
    draw("Score: " + percent + " % ", 10,100)

    var endtime = performance.now()
    var secs = Math.round((endtime - begintime)/1000)
    draw("Time: " + secs + " sec", 10,200)

    var xhr = new XMLHttpRequest();
    var req = "http://45.56.113.224:8080/score?game=Pythagoras&score="+percent
    xhr.open('GET', req, false);
    xhr.send();

  } else {
    repeat();
  }
}

function repeat() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.clearRect(0,0,800,600);
  a = rnd(2,15);
  b = rnd(2,15);
  if (b == a)
    b = a + 2

  var hyp = 0, height = 0, base = 0;
  if (a < 6) {
    hyp = Math.max(a,b)
    base = Math.min(a,b)
    h = Math.sqrt(hyp*hyp - base*base)
    c = 0.5*base*h
  } else if (a < 12) {
    hyp = Math.max(a,b)
    height = Math.min(a,b)
    ba = Math.sqrt(hyp*hyp - height * height)
    c = 0.5*ba*height
  } else {
    base = a
    height = b
    c = 0.5*a*b
  }
  
  
  c = Number.parseFloat(c).toFixed(2)

  x1 = 10
  y1 = 350
  w = 200
  x2 = x1 + w
  y2 = y1
  x3 = x2
  y3 = y2 - w*Math.tan(Math.PI/3)
  drawline(x1,y1,x2,y2)
  drawline(x1,y1,x3,y3)
  drawline(x3,y3,x2,y2)

  fill = '#0d00ff'
  font = '24px serif'
  draw(90, x2-30, y2-10, font, fill)

  fill = '#ff00ff'
  if (base > 0)
    draw(base, (x1+x2)/2, y1-10,  font, fill)
  if (height > 0)
    draw(height, x2 + 20, (y2+y3)/2,  font, fill)
  if (hyp > 0)
    draw(hyp, (x1+x3)/2 - 20, (y1+y3)/2,  font, fill)

  fill = '#0000ff'
  font = '64px serif'
  draw("Area", 300,200,font, fill)
  input.value('');
  input.focus();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

repeat();

