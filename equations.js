var a=0,b=0,c=0,d=0,e=0,f=0,x=0,y=0;
var correct = 0;
var incorrect = 0;
var count = 0;
var total = 5;
var begintime = performance.now();

var xinput = new CanvasInput({
  canvas: document.getElementById('canvas'),
  x:100,
  y:240,
  fontSize: 64,
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
  x:100,
  y:340,
  fontSize: 64,
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

  if (xans == x && yans == y) {
    correct += 1;
    draw("Correct!", 10, 100)
    await sleep(2000)
  } else {
    incorrect += 1;
    draw("Sorry!", 10,100)
    draw("x = " + x, 10,200)
    draw("y = " + y, 10,300)
    await sleep(4000)
  }
  count += 1;
  //alert(count)

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


  } else {
    repeat();
  }
}

function repeat() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.clearRect(0,0,800,600);
  x = rnd(1,9);
  y = rnd(1,19);
  a = rnd(1,9);
  b = rnd(1,9);
  c = a*x + b*y;
  d = rnd(1,9);
  e = rnd(1,9);
  f = d*x + e*y;
  draw("" + a + "x + " + b + "y = " + c, 10, 100)
  draw("" + d + "x + " + e + "y = " + f, 10, 200)
  draw("x", 10, 300)
  draw("y", 10, 400)
  xinput.value('');
  yinput.value('');
  xinput.focus();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

repeat();

