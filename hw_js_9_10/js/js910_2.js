$(function(){
	var checkbox = $('div.wrapper2 input');
	checkbox.css({'float' :'right',
				  'margin':'0',
				  'display': 'none'});
	checkbox.after("<div class='pic'></div>");
	$('div.pic').css({
		'display': 'block',
		'float'  : 'right',
		'width'  : '17px',
		'height' : '17px',
		'background-image': 'url(img/checkbox.png)'
	});
});