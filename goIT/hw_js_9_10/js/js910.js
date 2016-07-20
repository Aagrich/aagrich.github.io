$(function(){

	$('.jcarousel').jcarousel();

	$('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
    });

    $('.jcarousel-next').click(
    	function(){
    		$('.jcarousel').jcarousel("scroll", '+=1');
    	});
    $('.jcarousel-prev').click(
    	function(){
    		$('.jcarousel').jcarousel("scroll", '-=1');
    	});



});
$(function(){
	$('input:checkbox').uniform();
	});

$(function(){
    $("select").uniform();

});