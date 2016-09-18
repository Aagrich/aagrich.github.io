var canvas = document.getElementById('gameWindow');
var c = canvas.getContext('2d');

c.fillStyle = 'lightblue';
c.fillRect(0, 0, canvas.width, canvas.height);

c.fillStyle = 'yellow';
    c.beginPath();
    var x = 100;
    var y = 100;



document.addEventListener("keydown", function(event) {
  console.log(event.keyCode);

    if (event.keyCode == 37) {
      x = x - 5;
    };

    if (event.keyCode == 39) {
      x = x + 5;
    };

    c.moveTo(x, y);
c.arc( x, y, 10, 100, 200, false);
c.fill();
});
document.addEventListener("keydown", function(event) {
  console.log(event.keyCode);

    if (event.keyCode == 38) {
      y = y - 5;
    };

    if (event.keyCode == 40) {
      y = y + 5;
    };
    c.moveTo(x, y);
c.arc( x, y, 10, 100, 200, false);
c.fill();
});



