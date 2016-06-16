

$(function() {

function jcheckbox(elem) {
	var $elem = $(elem);
	var $checkbox = $("input", $elem);
	console.log($checkbox);
	var $noNchecked = {
		display: 'block',
 		float  : 'right',
 		width  : '17px',
 		height : '17px',
 		backgroundImage: 'url(img/checkbox.png)'
	};
	var $checked = {

	};

	$checkbox.css({
		'float'  : 'right',
		'margin' : '0',
		'display': 'none'});
	$checkbox.after("<div class='pic'></div>");


};

jcheckbox('div.wrapper2');

});





// $(function(){
// 	var checkbox = $('div.wrapper2 input');
// 
// 	checkbox.css({
// 		'float' :'right',
// 		'margin':'0',
// 		'display': 'none'});
// 
// 	checkbox.after("<div class='pic'></div>");
// 
// 	$('div.pic').css({
// 		'display': 'block',
// 		'float'  : 'right',
// 		'width'  : '17px',
// 		'height' : '17px',
// 		'background-image': 'url(img/checkbox.png)'
// 	});
// 
// 	$('div.pic').click(function() {
// 	if ($(this).prop('checked')) {
// 		alert('a');
// 	};
// 	{
// 		$(this).attr('checked');
// 	};
// 	});
// });

