'use strict'


$( document ).ready(function() {
 var $firstname = $('.firstname');
 var $lastname = $('.lastname');
 var $adress = $('.adress');
 var $informText = $('.inform__text');
 var $tabsWraper = $('.tabs__wraper');
 var $tabs1 = $('.tabs1');
 var $tabs2 = $('.tabs2');
 var $tabs3 = $('.tabs3');
// var $animat = $(this).animate({opacity: 1}, 5000, $(this).find('p').css('display', 'inline'));
function $showMessage() {
	$(this).find('p').css('display', 'inline');
 	};
function $hideMessage() {
	$(this).find('p').css('display', 'none');
 	};
function $showText() {
  var $el = $(this);
  $tabsWraper.find('.tabs__active').removeClass('tabs__active');
  $informText.find('.text__active').removeClass('text__active');

  $el.addClass('tabs__active');

  if ($el[0] === $tabs1[0]) {
    $('#text1').addClass('text__active');
  }
  if ($el[0] === $tabs2[0]) {
    $('#text2').addClass('text__active');
  }
  if ($el[0] === $tabs3[0]) {
    $('#text3').addClass('text__active');
  }

	};
function $hideText() {

	};

 $firstname.hover($showMessage,$hideMessage);
 $lastname.hover($showMessage,$hideMessage);
 $adress.hover($showMessage,$hideMessage);

$('.tabs1').click($showText);
$('.tabs2').click($showText);
$('.tabs3').click($showText);
});
