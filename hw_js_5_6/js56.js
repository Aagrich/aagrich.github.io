"use strict"

var timeDisplay = document.getElementById('timeDisplay');
var milisecDisplay = document.getElementById('milisecDisplay');
var buttons = document.getElementById('buttons');
var start = document.getElementById('start');
var pause = document.getElementById('pause');
var prolong = document.getElementById('prolong');
var clear = document.getElementById('clear');
var i = -1;


function action() {
	var btnClick = event.target;
	var interval; 
	var timer;
	function timerok() {
		if ( i < 9 ){
			i++;
			console.log(i);
			timeDisplay.innerHTML = i;
		}
		if (i == 9) {
			i = -1;
		}
		timer = setTimeout(timerok , 1000);

	}

	if (btnClick == pause) {
		pause.classList.add('hidden');
		prolong.classList.remove('hidden');
		clearTimeout(timer);
	}
	if (btnClick == prolong) {
		prolong.classList.add('hidden');
		pause.classList.remove('hidden');
	}
	if (btnClick == clear) {
		pause.classList.add('hidden');
		prolong.classList.add('hidden');
		start.classList.remove('hidden');
		i = 0;
		clearTimeout(timerok);
	}
		if (btnClick == start) {
		start.classList.add('hidden');
		pause.classList.remove('hidden');
		timer = setTimeout(timerok() , 1000);		
	}

}




buttons.addEventListener('click', action);




