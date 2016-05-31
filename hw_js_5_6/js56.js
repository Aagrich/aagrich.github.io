var timeDisplay = document.getElementById('timeDisplay');
var milisecDisplay = document.getElementById('milisecDisplay');
var buttons = document.getElementById('buttons');
var start = document.getElementById('start');
var pause = document.getElementById('pause');
var prolong = document.getElementById('prolong');
var clear = document.getElementById('clear');


function action() {
	alert('TESTING');
	var start = this.start;
	console.log(start);
	start.classList.add('hidden');
	this.pause.classList.remove('hidden');
};




buttons.addEventListener('click', action);




