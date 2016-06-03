'use strict'


$( document ).ready(function() {
 var $firstname = $('.firstname');
 var $lastname = $('.lastname');
 var $adress = $('.adress');
// var $animat = $(this).animate({opacity: 1}, 5000, $(this).find('p').css('display', 'inline'));
function $showMessage() {
	$(this).find('p').css('display', 'inline');
 	};
function $hideMessage() {
	$(this).find('p').css('display', 'none');
 	};
function $showText() {
	
	};
function $hideText() {

	};

 $firstname.hover($showMessage,$hideMessage);
 $lastname.hover($showMessage,$hideMessage); 
 $adress.hover($showMessage,$hideMessage); 
});
