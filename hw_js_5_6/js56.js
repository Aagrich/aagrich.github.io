"use strict"

var timeDisplay = document.getElementById('timeDisplay');
var milisecDisplay = document.getElementById('milisecDisplay');
var buttons = document.getElementById('buttons');
var start = document.getElementById('start');
var pause = document.getElementById('pause');
var prolong = document.getElementById('prolong');
var clear = document.getElementById('clear');
var i = -1;
var btnClick;


function action() {
	btnClick = event.target;
	var interval; 
	var timer;
	function timerok() {
	
		if ( i < 10 ){
			i++;
			console.log(i);
		}
		if (i === 10) {
			i = 0;
		}
		timer = setTimeout(timerok , 1000);
		if (btnClick === pause) {
			pause.classList.add('hidden');
			prolong.classList.remove('hidden');
			clearTimeout(timer);
			if ( i != 0) {
			i = i -1;
			}
		}
		if (btnClick === clear) {
			clearTimeout(timer);
		}
		timeDisplay.innerHTML = i;
		
	}

	if (btnClick === pause) {
		
	}
	if (btnClick === prolong) {
		prolong.classList.add('hidden');
		pause.classList.remove('hidden');
		timer = setTimeout(timerok() , 1000);	
	}
	if (btnClick === clear) {
		pause.classList.add('hidden');
		prolong.classList.add('hidden');
		start.classList.remove('hidden');
		timeDisplay.innerHTML = 0;
		i = -1;
	}
		if (btnClick === start) {
		start.classList.add('hidden');
		pause.classList.remove('hidden');
		timer = setTimeout(timerok() , 1000);		
	}

}




buttons.addEventListener('click', action);




