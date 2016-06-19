$(function(){

	function jmenu(mainMenu, secondMenu, lastMenu) {
		var $mainMenu   = $(mainMenu);
		var $secondMenu = $(secondMenu);
		var $lastMenu   = $(lastMenu);
		var $mainInner  = $(mainMenu+ " li:nth-child(2)");
		var $secondInner= $(secondMenu+ " li:nth-child(2)");

		$secondMenu.appendTo($mainInner);
		$lastMenu.appendTo($secondInner);

		$mainMenu.css({
			'position': 'relative'
		});
		$secondMenu.css({
			'position': 'absolyte',
			'display': 'none'
			});
		$lastMenu.css({
			'position': 'absolyte',
			'display': 'none'
			});

		$mainInner.hover(function(){
			$secondMenu.slideDown(200);
		}, function(){
			$secondMenu.slideUp(200);
		});
		$secondInner.hover(function(){
			$lastMenu.slideDown(200);
		}, function(){
			$lastMenu.slideUp(200);
		});

};

	jmenu('.main-menu', '.second-menu', '.last-menu');

});
