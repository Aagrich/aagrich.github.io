"use strict"

var timeDisplay = document.getElementById('timeDisplay');
var milisecDisplay = document.getElementById('milisecDisplay');
var buttons = document.getElementById('buttons');
var start = document.getElementById('start');
var pause = document.getElementById('pause');
var prolong = document.getElementById('prolong');
var clear = document.getElementById('clear');
var i = -1;
var x = 0;
var y = 0;
var btnClick;


function action() {
	btnClick = event.target;
	var interval;
	var timer;
	function timerok() {

		if ( i < 20 ){
			i++;
			i = (i < 10) ? ('0' + i):i;
		}
		if (i === 20) {
			i = 0;
			x++;
			x = (x < 10) ? ('0' + x):x;
		}
		if (x === 20) {
			x = 0;
			y++;
			y = (y < 10) ? ('0' + y):y;
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



		timeDisplay.innerHTML = y + ":" + x + ":" + i;

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
		timeDisplay.innerHTML = '00:00:00';
		i = -1;
		y = 0;
		x = 0;
	}
		if (btnClick === start) {
		start.classList.add('hidden');
		pause.classList.remove('hidden');
		timer = setTimeout(timerok() , 1000);
	}

}




buttons.addEventListener('click', action);




