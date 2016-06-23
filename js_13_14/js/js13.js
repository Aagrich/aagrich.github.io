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
   var testkey = {


   };
   var result = {

   };

   var content = tmpl( $testList, {questiong});

   $('ol').append(content).jCheckbox('left');

   $('button').click(function(){

      var selected = $('.selected');
      for (i = 0; i < selected.length; i++) {
          var result;
          var x = 0;
          var q = selected[i].matches('input[name="'+questiong[0].name+'"]');
          var a = selected[i].matches('input[value="'+questiong[0].variant[0]+'"]');
          if(q & a) {
            var result = true;
              alert('Good!');
           }
          else {
            alert('wrong');
          }
      }
 });


});
