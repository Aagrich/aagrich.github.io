$(function(){

	function jmenu(mainMenu, secondMenu, lastMenu) {
		var $mainMenu   = $(mainMenu);
		var $secondMenu = $(secondMenu);
		var $lastMenu   = $(lastMenu);

		$secondMenu.css(
			{'height': '0',
			 'overflow': 'hidden'
			});
		$lastMenu.css({
			'height': '0',
			'overflow': 'hidden'
			});

		


	
	};

	jmenu('.main-menu', '.second-menu', '.last-menu');

});