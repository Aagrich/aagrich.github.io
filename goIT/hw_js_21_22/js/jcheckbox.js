(function($){

	$.fn.jCheckbox = function(position) {
	
	var $checkbox = $("input", this);
	var $label = $('label', this);

	$checkbox.css({
		'float'  : 'right',
		'margin' : '0',
		'display': 'none'});

	$checkbox.after("<div class='pic'></div>");

	$('.pic', this).css({
		'display': 'block',
 		'float'  : position,
 		'margin' : '0 6px',
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
				$('input', this).prop('class', 'notSelected');
				$('.pic', this).css(
					'background-position', '0 0');
			}

		else {
				$('input', this).prop('checked', true);
				$('input', this).prop('class', 'selected');
				$('.pic', this).css(
					'background-position', '0 -17px');
			}
		
	});



};

})(jQuery)