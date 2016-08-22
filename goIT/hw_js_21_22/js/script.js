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


 	function makeVariant( question, page ) {

		for (let a of question.options)
		{ let variant = document.createElement('label');
			let x = `
	 ${'<input name='} ${question.name} ${'type=checkbox'} ${'value='} ${a} ${'>'} ${a} `;
		variant.innerHTML = x;
		page.appendChild(variant);
		};
	};

   var makeTest = function(test) {
				let testList = document.createElement('ol');

   	  	for (let question of test) {

				let punct = document.createElement('li');
   			let x = `${question.name}`;
				punct.innerHTML = x;
				testList.appendChild(punct);
				makeVariant(question, testList);
   		};
				return testList;
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
  		}
  		else {
  			message = "BAD result!";
  		};
  		let modalWindow = `${'<div class = window-wrapper><div class = modal-window><p>'} +
  		${message} +
  		${'</p></div> </div>'} + ${'<button class=OKbutton> OK </button>'}`;
  		page.appendChild(modalWindow);
  };

	pushTest(makeTest(questiong),'test_window');



});
