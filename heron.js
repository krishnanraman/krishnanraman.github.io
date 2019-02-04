var area = 0;
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
  
if (Math.abs(ans - area) < 0.5) {
    correct += 1;
    draw("Correct!", 10, 100)
    await sleep(500)
  } else {
    incorrect += 1;
    draw("Sorry!", 10,100)
    draw("Ans: " + area, 10,200)
    await sleep(4000)
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


  } else {
    repeat();
  }
}

function repeat() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.clearRect(0,0,800,600);

  var done = false
  var a=0,b=0,c=0
  while(!done) {
    a = rnd(2,15);
    b = rnd(2,15);
    c = rnd(2,15);
    if ((a + b > c) && (b + c > a) && (a + c > b))
      done = true
  }

  s = (a+b+c)/2.0
  area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
  area = Number.parseFloat(area).toFixed(2)

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

  fill = '#ff00ff'
  draw(a, (x1+x2)/2, y1-10,  font, fill)
  draw(b, x2 + 20, (y2+y3)/2,  font, fill)
  draw(c, (x1+x3)/2 - 20, (y1+y3)/2,  font, fill)

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

