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
        answer: ['John', 'Mike']
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
      var key = true;
      var test = false;
      var allAnswers = true;
      var answers = [];
      var userAnswers = [];

      for (i = 0; i < questiong.length; i++) {
          for (y = 0; y < questiong[i].answer.length; y++) {
            answers.push(questiong[i].answer[y]);
        }
      }

      // TEST CHECKER
      for (i = 0; i < selected.length; i++) {
            var question = selected[i].getAttribute('name');
            var answer = selected[i].getAttribute('value');

            userAnswers.push(answer);

            for (y = 0; y < questiong.length ; y++) {
                var name = questiong[y];
                if (questiong[y].name === question) {
                    var result = questiong[y].answer.indexOf(answer);
                    if (result > -1) {
                         test = true;
                    }
                    else {
                         key = false;
                    }
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
      for (i = 0; i < answers.length ; i ++)  {
          if (userAnswers.indexOf(answers[i]) === -1) {
              allAnswers = false;
          }
      }
      if ( key & test & allAnswers) {
          console.log(' GOOD RESULT!');
          console.log('RIGHT '+ answers);
          console.log('Your answers ' + userAnswers);
      }
      else {
          console.log(' BAD, VERY BAD!');
          console.log('RIGHT '+ answers);
          console.log('Your answers ' + userAnswers);
      };
 });


});
