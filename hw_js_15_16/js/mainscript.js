
$(function(){

$('#myLuck').click(function(){
	var ask = $('.search')[0].value;
	console.log(ask);

});	

$('#search').click(function(){
	var ask = $('.search')[0].value;
	$.getJSON("https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag=" + ask, 
	function(data){
		console.log('result = ' + data);
		var dataLength = data.results.length;
		var x = data.results[1];
		console.log(x);
		console.log(dataLength);
		var list = document.createElement('ul');
		var listItem = document.createElement('li');
		listItem.innerHTML = x.title;
		list.appendChild(listItem);
		$('.results').html(list);	
	});
   });
});
