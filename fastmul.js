var c = 0;
var correct = 0;
var incorrect = 0;
var count = 0;
var total = 10;

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
  ctx.clearRect(0,0,800,600);
  ctx.font = '128px serif';
  ctx.fillStyle = '#0d00ff';
  ctx.fillText(text, x,y);
}

function answer(ans) {
  if (ans == c) {
    correct += 1;
  } else {
    incorrect += 1;
  }
  count += 1;

  if (count == total) {
    input.destroy();
    var percent = correct*100/total;
    draw("" + percent + " % ", 10,100)
  } else {
    repeat();
  }
}

function repeat() {
  a = rnd(1,9);
  b = rnd(2,19);
  c = a*b;
  draw("" + a + " x " + b + " = ", 10, 100)
  input.value('');
  input.focus();
}

repeat();

