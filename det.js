var a=0,b=0,c=0,d=0,e=0;
var correct = 0;
var incorrect = 0;
var count = 0;
var total = 10;
var begintime = performance.now();

var input = new CanvasInput({
  canvas: document.getElementById('canvas'),
  x:500,
  y:0,
  fontSize: 128,
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
  onsubmit: function() {answer(input.value());},
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
if (ans == e) {
    correct += 1;
  } else {
    incorrect += 1;
    draw("Sorry!", 10,100)
    draw("Ans: " + e, 10,200)
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
    var req = "http://45.56.113.224:8080/score?game=Determinants&score="+percent+"&duration="+secs
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
  b = rnd(1,15);
  c = rnd(1,9);
  d = rnd(1,15);
  e = a*d - b*c;
  drawline(5,1,5,200)
  if (b > 9 || d > 9)
    drawline(300,1,300,200)
  else
    drawline(220,1,220,200)

  draw("" + a + "  " + b, 10, 100)
  draw("" + c + "  " + d, 10, 200)
  draw("=", 400, 150)
  input.value('');
  input.focus();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

repeat();

