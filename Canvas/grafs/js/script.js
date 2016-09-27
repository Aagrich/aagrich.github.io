
var sails = [1,32,64,92,28,56,24,46,67,50,101,47,60];

function makeList(data,listId) {
    var delButton = document.createElement('button');
    delButton.innerHTML = 'X';
    var list = document.getElementById(listId);
    for (var i = 0; i < data.length; i++) {
        var punct = document.createElement('li');
        if (data[i] > 1) {
            punct.innerHTML = data[i] + " sails";
        };
        if (data[i] == 1) {
            punct.innerHTML = data[i] + " sail";
        }
        punct.appendChild(delButton);
        list.appendChild(punct);
    }
};


function makeDiagram(data) {

var canvas = document.getElementById('canvas');
 var c = canvas.getContext('2d');
 c.fillStyle = 'lightgray';
 c.fillRect(0,0,canvas.height,canvas.width);

 var x = 0;
 var y = 0;
 for (var i = 0; i < data.length; i++){
     x += canvas.width/data.length-4;
     y = canvas.width - data[i];
     var z = canvas.width/data.length-4;
     c.fillStyle = 'black';
     c.beginPath();
     c.moveTo(x, y);
     c.lineTo( z + x, canvas.width - sails[i+1]);
     c.stroke();
     c.beginPath();
     c.moveTo(x, y);
     c.arc(x, y, 4, 100, 160, false );
     c.fill();
     c.stroke();
 };
};

makeList(sails,'sailsList');
makeDiagram(sails);
