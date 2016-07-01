
$(function(){

$('#myLuck').click(function(){
	var ask = $('.search')[0].value;
	console.log(ask);

});	

$('#search').click(function(){
	var ask = $('.search')[0].value;
	$.getJSON("https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag=" + ask, 
	function(data){
		var dataLength = data.results.length;

		for (i = 0; i < dataLength; i++ ) {
		var result = data.results[i];
		var element = document.createElement('div');
		element.innerHTML = result.title + '<a href=' + result.url + '>' + '<img src=' + result.url + '>' + '</a>';
		list.appendChild(element);
		};
		$('.results').html(list);	
	});
   });
});
