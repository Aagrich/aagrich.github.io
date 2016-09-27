
var sails = [15,88,45,35,28,17,24,46,67,50,32,47,60];

function makeList(data,listId) {
    var list = document.getElementById(listId);
    for (var i = 0; i < data.length; i++) {
        var punct = document.createElement('li');
        punct.innerHTML = data[i];
        list.appendChild(punct);
    }
};

makeList(sails,'sailsList');















var canvas = document.getElementById('canvas');
 var c = canvas.getContext('2d');
 c.fillStyle = 'lightgray';
 c.fillRect(0,0,500,500);

 var x = 0;
 var y = 0;
 for (var i = 0; i < sails.length; i++){
     x += 500/sails.length-4;
     y = 500 - sails[i];
     var z = 500/sails.length-4;
     c.fillStyle = 'black';
     c.beginPath();
     c.moveTo(x, y);
     c.lineTo( z + x, 500-sails[i+1]);
     c.stroke();
     c.beginPath();
     c.moveTo(x, y);
     c.arc(x, y, 4, 100, 160, false );
     c.fill();
     c.stroke();
 };
