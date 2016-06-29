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
      var allAnswers = true;
      var answers = [];
      var userAnswers = [];

      for (i = 0; i < questiong.length; i++) {
          for (y = 0; y < questiong[i].answer.length; y++) {
            answers.push(questiong[i].answer[y]);
        }
      }
      for (i = 0; i < selected.length; i++) {
            var question = selected[i].getAttribute('name');
            var answer = selected[i].getAttribute('value');
            userAnswers.push(answer);
      }
      for (i = 0; i < answers.length ; i ++)  {
          if (userAnswers.indexOf(answers[i]) === -1) {
              allAnswers = false;
          }
          if (answers.indexOf(userAnswers[i]) === -1) {
              allAnswers = false;
          }
      }
    if (allAnswers) {
          mWindow('GOOD RESULT!');
      }
      else {
          mWindow(' BAD, VERY BAD!');
      };
 });

 function mWindow(message) {
     var result = $("<div class = window-wrapper><div class = modal-window></div> </div>");
     var OKbutton = $("<button class=OKbutton> OK </button>");
     var textMessage = $('<p>'+ message + '</p>');
     var $windowWrapper =  $('.window-wrapper');
     var $modalWindow = $('.modal-window');
     $('body').append(result);
     $('.modal-window').append(textMessage).append(OKbutton);
     $('.OKbutton').click(function(){
       $('.window-wrapper').remove();
     })
 }


});
