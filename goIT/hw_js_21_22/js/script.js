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
  			let rightAnswers = function(){
  				for (let question of test) {
  					for (let value of test.question.answer) {
  						rightAnswers.push(value);
  					}
  				}
  			};
  }

});