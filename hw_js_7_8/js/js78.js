'use strict'


$( document ).ready(function() {
 var $firstname = $('.firstname');
 var $lastname = $('.lastname');
 var $adress = $('.adress');
 var $someDOM = $(this);

function $showText() {
	$(this).find('p').css('display', 'inline');
 	}
function $hideText() {
	$(this).find('p').css('display', 'none');
 	}


 $firstname.hover($showText,$hideText);
 $lastname.hover($showText,$hideText); 
 $adress.hover($showText,$hideText); 
});
