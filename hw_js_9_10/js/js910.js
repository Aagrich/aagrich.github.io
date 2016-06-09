$(function(){

	$('.jcarousel').jcarousel();

	$('.jcarousel-next').click(
		function(){
			$('.jcarousel').jcarousel( "scroll", '+=1');
		});
	$('.jcarousel-prev').click(
		function(){
			$('.jcarousel').jcarousel( "scroll", '-=1');
		});


});