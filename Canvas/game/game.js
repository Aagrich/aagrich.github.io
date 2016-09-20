var canvas = document.getElementById('gameWindow');
var c = canvas.getContext('2d');
var x = 25;
var y = 120;
paint(c,x,y);

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

function running(e,z) {
    document.addEventListener("keydown", function(event) {
    if (event.keyCode == 37 & x > 0) {
      c.clearRect(0,0,canvas.width,canvas.height);
      x = x - z;
      paint(e,x,y);
    };
    if (event.keyCode == 39 & x < canvas.width) {
          c.clearRect(0,0,canvas.width,canvas.height);
      x = x + z;
      paint(e,x,y);
    };
    if (event.keyCode == 38 & y > 0) {
        console.log(y);
      c.clearRect(0,0,canvas.width,canvas.height);
        paint(e,x,y);
    };
    if (event.keyCode == 40 & y < canvas.height) {
      c.clearRect(0,0,canvas.width,canvas.height);
      y = y + z;
      paint(e,x,y);
    };
});
};
function paint(e,x,y) {
e.fillStyle = 'lightblue';
e.fillRect(0, 0, canvas.width, canvas.height);
e.fillStyle = 'yellow';
e.beginPath();
e.arc(x, y, 10, 100, 200, false);
e.fill();
};

running(c,5);








