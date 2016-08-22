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
        answer: ['John', 'Mike'],
     },
     {
       name: 'Where?',
       options: [
         'Here',
         'There',
         'Near',
         'Nowhere'
     ],
        answer: ['Near'],
     },
     {
       name: 'When?',
       options: [
         'Today',
         'Tommorow',
         'Yesterday',
         'Never'
     ],
        answer: ['Never'],
     }
   ];



   var makeTest = function(test) {

		 			function makeVariant( question, page ) {

			 		for (let a of question.options) {
						 let variant = document.createElement('label');
				 			let x = `
							${'<input name='} ${question.name} ${'type=checkbox'} ${'value='} ${a} ${'>'} ${a} `;
			 				variant.innerHTML = x;
			 				page.appendChild(variant);
			 				};
		 			};

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

  function checkTest(test) {
				let answers;

  				for (let question of test) {
					//	console.log(test.question.answer);
  				//	for (let value of test.question.answer) {
					//		answers.push(value);
  			//		}
  				}

				console.log('answers =' + answers);
				let userAnswers = document.querySelectorAll('.selected');
				console.log('userAnswers = ' + userAnswers[1]);

  //			for (let value of answers) {
  //				if (userAnswers.indexOf(value) == -1) {
  //					return false;
  //				};
  //				return true;
  //			};
  };

  function showResult(result, pageId) {
  	let page = document.getElementById(pageId);
  	let message;
  		if (result === true) {
  			message = "Good RESULT!";
  		}
  		else {
  			message = "BAD result!";
  		};

  		let modalWindow = document.createElement('div');
			modalWindow.className = 'window-wrapper';
			modalWindow.innerHTML = `${'<div class = modal-window><p>'}
  		${message}
  		${'</p></div>'} ${'<button class=OKbutton> OK </button>'}`;
  		page.appendChild(modalWindow);
  };

	function pushTest(test, pageId) {
				 let page = document.getElementById(pageId);
				 var button = document.createElement('button');
				 let testName = document.createElement('h1');
				 testName.innerHTML = 'Test "Who? Where? When?"';
				 page.appendChild(testName);
				 page.appendChild(test);
				 button.innerHTML = 'Show my result';
				 button.onclick = function() {showResult(checkTest(questiong), pageId)};
				 page.appendChild(button);

	};

	pushTest(makeTest(questiong),'test_window');






});
