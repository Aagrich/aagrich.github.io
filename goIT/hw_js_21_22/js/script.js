'use strict'
$(function(){
	   var questiong = [
     {
       name: 'Who?',
       options: [
         'John',
         'Nick',
         'Jack',
         'Mike'
     ],
        answer: ['John', 'Mike']
     },
     {
       name: 'Where?',
       options: [
         'Here',
         'There',
         'Near',
         'Nowhere'
     ],
        answer: ['Near']
     },
     {
       name: 'When?',
       options: [
         'Today',
         'Tommorow',
         'Yesterday',
         'Never'
     ],
        answer: ['Never']
     }
   ];




   var makeTest = function(test) {
   		   let testList = createElement('ol');
   		for (let question of test) {
   			testList.innerHTML(`${'<li>'} + ${question.name} + ${ for (let variant of question.options) {
   				return `
   				${'<label>'} + 
   				${'<input name='} + ${question.name} + ${'type=checkbox'} + ${'value='} + ${variant} +${'>'} +
   				${variant} + ${'</label>'}`;
   			};}`);
   			return testList;
   		}
   };
  function pushTest(test, pageId) {
  		   let page = document.getElementById(pageId);
  		   page.appendChild(test);
  };
  function checkTest(test) {

  			let answers = function(){
  				for (let question of test) {
  					for (let value of test.question.answer) {
  						Answers.push(value);
  					}
  				}
  				return Answers;
  			};
  			let userAnswers = querySelectorsAll('.selected');

  			for (let value of answers) {
  				if (userAnswers.indexOf(value) == -1) {
  					return false;
  				};
  				return true;
  			};
  };
  function showResult(result) {
  	let page = document.getElementById(pageId);
  	let message;
  		if (result === true) {
  			message = "Good RESULT!";
  		};
  		else {
  			message = "BAD result!";
  		};
  		let modalWindow = `${'<div class = window-wrapper><div class = modal-window><p>'} + 
  		${message} + 
  		${'</p></div> </div>'} + ${'<button class=OKbutton> OK </button>'}`;
  		page.appendChild(modalWindow);
  };

});