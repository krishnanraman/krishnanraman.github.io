var c = 0;
var correct = 0;
var incorrect = 0;
var count = 0;
var total = 10;
var begintime = performance.now();

var input = new CanvasInput({
  canvas: document.getElementById('canvas'),
  x:200,
  y:200,
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

function draw(text, x, y, font) {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = font;
  ctx.fillStyle = '#0d00ff';
  ctx.fillText(text, x,y);
}

async function answer(ans) {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.clearRect(0,0,800,600);

if (ans == c) {
    correct += 1;
  } else {
    incorrect += 1;
    draw("Sorry! "+ a + " choose " + b + " = " + c, 10,100,'32px serif')
    await sleep(2000)
  }
  count += 1;
  if (count == total) {
    report();
  } else {
    repeat();
  }
}

function report() {
    input.destroy();
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.clearRect(0,0,800,600);
    var percent = correct*100/total;
    draw("Score: " + percent + " % ", 10,100,'128px serif')

    var endtime = performance.now()
    var secs = Math.round((endtime - begintime)/1000)
    draw("Time: " + secs + " sec", 10,200,'128px serif')

    var xhr = new XMLHttpRequest();
    var req = "http://45.56.113.224:8080/score?game=Combinatorics&score="+percent+"&duration="+secs
    xhr.open('GET', req, false);
    xhr.send();
}


function repeat() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.clearRect(0,0,800,600);
  a = rnd(2,20);
  b = rnd(1,6);
  if (b > a)
    b = a - 1
  
  var bs = Math.min(b, a - b)
  var num = 1, denom = 1
  var ai = a, bi = bs
  for(i = 0;i<bs;i++) {
    num *= ai
    denom *= bi
    ai -= 1
    bi -= 1
  }
  c = num/denom

  draw("" + a + " choose " + b, 10, 100,'128px serif')
  input.value('');
  input.focus();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

repeat();

