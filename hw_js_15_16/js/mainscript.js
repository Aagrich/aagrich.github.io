
$(function(){

$('#myLuck').click(function(){
	var ask = $('.search')[0].value;
	console.log(ask);
});

function searchPic() {
	var ask = $('.search')[0].value;
	$.getJSON("https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag=" + ask + "&limit=15",
	function(data){
		$('.results > div').remove();
		$('.wrapper').css({
			'margin': '0',
			'padding': '3%',
			'text-align': 'left',
			'background-color' : 'grey'
		});
		$('input').css('display','inline-block');
		$('#myLuck').css('display','none');
		$('#search').css('display','inline-block');
		$('.logo').css('margin', '15px');
		var dataLength = data.results.length;
		for (i = 0; i < dataLength; i++ ) {
		var result = data.results[i];
		var element = document.createElement('div');
		element.innerHTML = result.title + '<a class="pic" href=' + result.url + '>' + '<img src=' + result.url + '>'+ '<br>' + result.url + '</a>';
		$('.results').append(element);
};
});
};
$('#search').click(searchPic());


});
