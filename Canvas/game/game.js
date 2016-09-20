var canvas = document.getElementById('gameWindow');
var c = canvas.getContext('2d');
var x = 25;
var y = 120;
function animTestX() {
    for (x; x < xz; x++) {
        paint();
    };
    window.requestAnimationFrame(animTestX);
};
function animTestY() {
    for (y; y < yz; y++) {
        paint();
    };
    window.requestAnimationFrame(animTestY);
};
function paint() {
c.fillStyle = 'lightblue';
c.fillRect(0, 0, canvas.width, canvas.height);
c.fillStyle = 'yellow';
c.beginPath();
c.arc(x, y, 10, 100, 200, false);
c.fill();
};
paint();

function running(z) {
    document.addEventListener("keydown", function(event) {
    if (event.keyCode == 37 & x-10 > 0) {
      c.clearRect(0,0,canvas.width,canvas.height);
      xz = x - z;
      window.requestAnimationFrame(animTestX);
    };
    if (event.keyCode == 39 & x+10 < canvas.width) {
      c.clearRect(0,0,canvas.width,canvas.height);
      xz = x + z;
      window.requestAnimationFrame(animTestX);
    };
    if (event.keyCode == 38 & y-10 > 0) {
      yz = y - z;
      c.clearRect(0,0,canvas.width,canvas.height);
      window.requestAnimationFrame(animTestY);
    };
    if (event.keyCode == 40 & y+10 < canvas.height) {
      c.clearRect(0,0,canvas.width,canvas.height);
      yz = y + z;
      window.requestAnimationFrame(animTestY);
    };
    if ( y = canvas.height-10) {
        for (var i = 0; i < 10; i ++) {
            y--;
            window.requestAnimationFrame(animTestY);
        };
    };
});
};
running(2);

function animTestX() {
    if (x < xz) {
        x++
        paint();
    };
    if (x > xz) {
        x--
        paint();
    }
    window.requestAnimationFrame(animTestX);
};
function animTestY() {
    if (y < yz) {
        y++
        paint();
    };
    if (y > yz) {
        y--
        paint();
    }
    window.requestAnimationFrame(animTestY);
};









