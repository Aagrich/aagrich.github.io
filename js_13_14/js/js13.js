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

      // var selected = $('.selected' & '[name="Who?"]');
      var selected = $('.selected');
      for (i = 0; i < selected.length; i++) {

        if(selected[i].matches('input[name="'+questiong[0].name+'"]')) {
          console.log(selected[i].matches('input[value="Nick"]'));
        }
      }
   });


});
