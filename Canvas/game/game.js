var canvas = document.getElementById('gameWindow');
var c = canvas.getContext('2d');
paint(c,0,0);

function running(e,z) {
    document.addEventListener("keydown", function(event) {
        var x = 0;
        var y = 0;
    if (event.keyCode == 37) {
      x = x - z;
      paint(e,x,y);
    };
    if (event.keyCode == 39) {
      x = x + z;
      paint(e,x,y);
    };
    if (event.keyCode == 38) {
      y = y - z;
        paint(e,x,y);
    };
    if (event.keyCode == 40) {
      y = y + z;
      paint(e,x,y);
    };
});
};
function paint(e,x,y) {
e.fillStyle = 'lightblue';
e.fillRect(0, 0, canvas.width, canvas.height);
e.fillStyle = 'yellow';
e.translate(x,y);
e.beginPath();
e.arc(25, 125, 10, 100, 200, false);
e.fill();
};

running(c,3);








