
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
        list.appendChild(punct);
    }
};


function makeDiagram(data) {

var canvas = document.getElementById('canvas');
 var c = canvas.getContext('2d');
 c.fillStyle = 'lightgray';
 c.fillRect(0,0,canvas.height,canvas.width);
 c.fillStyle = 'black';
 c.lineWidth = 2.0;
 c.beginPath();
 for (var i = 0; i < canvas.height; i = i + 10) {
     c.moveTo(0,i);
     c.lineTo(6,i);
     c.fillText(Math.abs(i - canvas.height), 10, i);
     c.stroke();
 }
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
     c.moveTo(x,canvas.height);
     c.lineWidth = 2.0;
     c.lineTo(x,canvas.height-6);
     c.fillText((function(){
         if (i<9) return "0" + (i + 1);
         else return i+1;})(),
                x-6,canvas.height-10);
     c.stroke();
 };
};

makeList(sails,'sailsList');
makeDiagram(sails);
