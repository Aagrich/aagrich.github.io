"use strict"

var timeDisplay = document.getElementById('timeDisplay');
var milisecDisplay = document.getElementById('milisecDisplay');
var buttons = document.getElementById('buttons');
var start = document.getElementById('start');
var pause = document.getElementById('pause');
var prolong = document.getElementById('prolong');
var clear = document.getElementById('clear');


function action() {
	var click = event.target;
	if (click == start) {
		start.classList.add('hidden');
		pause.classList.remove('hidden');
	}
	if (click == pause) {
		pause.classList.add('hidden');
		prolong.classList.remove('hidden');
	}
	if (click == prolong) {
		prolong.classList.add('hidden');
		pause.classList.remove('hidden');
	}
	if (click == clear) {
		pause.classList.add('hidden');
		prolong.classList.add('hidden');
		start.classList.remove('hidden');
	}

}




buttons.addEventListener('click', action);




