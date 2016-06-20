$(function(){

   var $testList =  $('#question').html();

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

   $('ol').append(content);

});
