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
   var test = questiong[0].variant[0].length;
   console.log(test);
   $('ol').append(content).jCheckbox('left');


});
