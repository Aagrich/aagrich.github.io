$(function(){

   var $testList =  $('#question').html();
   var result = [{},{},{}];
   var questiong = [
     {
       name: 'Who?',
       variant: [
         'John',
         'Nick',
         'Jack',
         'Mike'
       ]
     },
     {
       name: 'Where?',
       variant: [
         'Here',
         'There',
         'Near',
         'Nowhere'
       ]
     },
     {
       name: 'When?',
       variant: [
         'Today',
         'Tommorow',
         'Yesterday',
         'Never'
       ]
     }
   ];

   var content = tmpl( $testList, {questiong});

   $('ol').append(content).jCheckbox('left');

   $('button').click(function(){ 

      var selected = $('.selected');

      for (i = 0; i < selected.length; i++) {
        var elem = selected.i;
        var res = selected.i;
       console.log(elem);
       console.log(res);

              }
   

   });


});
