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
     ],
        answer: ['Mike', 'John']
     },
     {
       name: 'Where?',
       variant: [
         'Here',
         'There',
         'Near',
         'Nowhere'
     ],
        answer: ['Near']
     },
     {
       name: 'When?',
       variant: [
         'Today',
         'Tommorow',
         'Yesterday',
         'Never'
     ],
        answer: ['Never']
     }
   ];

   var content = tmpl( $testList, {questiong});

   $('ol').append(content).jCheckbox('left');

   $('button').click(function(){

      var selected = $('.selected');

      for (i = 0; i < selected.length; i++) {
            var question = selected[i].getAttribute('name');
            var answer = selected[i].getAttribute('value');
            console.log(question + '   ' + answer);
            for (y = 0; y < questiong.length ; y++) {
                var name = questiong[y];
                if (questiong[y].name === question) {
                    var ind = questiong[y].answer.indexOf(answer);
                    console.log(ind + "-IND!");

                };
            }
//          var result;
//          var x = 0;
//          var q = selected[i].matches('input[name="'+questiong[0].name+'"]');
//          var a = selected[i].matches('input[value="'+questiong[0].variant[0]+'"]');
//          if(q & a) {
//            var result = true;
//              alert('Good!');
//           }
//          else {
//            alert('wrong');
//          }
      }
 });


});
