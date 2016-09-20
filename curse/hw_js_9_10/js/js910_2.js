

$(function() {

function jcheckbox(elem) {

	var $elem = $(elem);
	var $checkbox = $("input", $elem);
	var $label = $('label', $elem);

	$checkbox.css({
		'float'  : 'right',
		'margin' : '0',
		'display': 'none'});

	$checkbox.after("<div class='pic'></div>");

	$('.pic', $elem).css({
		'display': 'block',
 		'float'  : 'right',
 		'width'  : '17px',
 		'height' : '17px',
 		'background-image' : 'url(img/checkbox.png)'
	});

    $('input[checked] ~ div').css(
        'background-position', '0 -17px');

    $('input[disabled] ~ div').css(
        'background-image', 'url(img/checkbox-disabled.png)')


	$label.click( function(){

		if ($('input', this).prop("checked") & $('input', this).prop("disabled") === false) {
				$('input', this).prop('checked', false);
				$('.pic', this).css(
					'background-position', '0 0');
			}

		else {
				$('input', this).prop('checked', true);
				$('.pic', this).css(
					'background-position', '0 -17px');
			}

	});



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

