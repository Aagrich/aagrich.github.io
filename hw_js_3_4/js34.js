// var testpage = {
// 	addElement: function(objects) {
// 		var element = document.createElement(objects.tagName);
// 		if 
// 
// 	}
// 	return element;
// }


var app = {

  createElement: function(params) {
    var element = document.createElement(params.tagName);

    if (params.inputType){
      element.setAttribute('type', params.inputType);
    }

    if (params.className){
      element.className = params.className;
    }

    if (params.content){
      element.innerHTML = params.content;
    }

    if (params.parentElement){
      params.parentElement.appendChild(element);
    }

    return element;
  },

  generateQuestions: function(questionsAmount, answersAmount) {

    for (var i = 0; i < questionsAmount; i++) {

      this.createElement({
        tagName: 'h2',
        content: 'Вопрос №' + (i + 1),
        parentElement: form
      });

      for (var j = 0; j < answersAmount; j++) {

        var label = this.createElement({
          tagName: 'label',
          content: 'Вариант ответа №' + (j + 1),
          parentElement: form
        });

        var checkbox = this.createElement({
          tagName: 'input',
          inputType: 'checkbox'
        });

        label.insertAdjacentElement('afterBegin', checkbox);
      }

    };

  }

}



var body = document.querySelector('body');


app.createElement({
  tagName: 'h1',
  content: 'Тест по программированию',
  parentElement: body
});

var form = app.createElement({
  tagName: 'form',
  parentElement: body
});

app.generateQuestions(3, 3);

app.createElement({
  tagName: 'input',
  inputType: 'submit',
  content: 'Проверить мои результаты',
  parentElement: form
});



/* var page = document.body;

var header = document.createElement('p');
header.className = "header1";
header.innerHTML = "Тест по програмированию";

var list = document.createElement('ul');
list.className = "list1";

var question = document.createElement('li');
question.className = "question99";
question.innerHTML = 'Вопрос №1';

var question2 = question.cloneNode(true);
question2.innerHTML = 'Вопрос №2';

var question3 = question.cloneNode(true);
question3.innerHTML = 'Вопрос №3';

var variant = document.createElement('li');
variant.className = "variant99";
variant.innerHTML = '<input type="checkbox" name="var1" value="1"> Вариант ответа  №1';

var variant2 = variant.cloneNode(true);
variant2.innerHTML = '<input type="checkbox" name="var2" value="2"> Вариант ответа  №2';

var variant3 = variant.cloneNode(true);
variant3.innerHTML = '<input type="checkbox" name="var3" value="3"> Вариант ответа  №3';

var variant4 = variant.cloneNode(true);
variant.innerHTML = '<input type="checkbox" name="var1" value="1"> Вариант ответа  №1';

var variant5 = variant.cloneNode(true);
variant2.innerHTML = '<input type="checkbox" name="var2" value="2"> Вариант ответа  №2';

var variant6 = variant.cloneNode(true);
variant3.innerHTML = '<input type="checkbox" name="var3" value="3"> Вариант ответа  №3';

var variant7 = variant.cloneNode(true);
variant.innerHTML = '<input type="checkbox" name="var1" value="1"> Вариант ответа  №1';

var variant8 = variant.cloneNode(true);
variant2.innerHTML = '<input type="checkbox" name="var2" value="2"> Вариант ответа  №2';

var variant9 = variant.cloneNode(true);
variant3.innerHTML = '<input type="checkbox" name="var3" value="3"> Вариант ответа  №3';

var button = document.createElement('button');
button.className = "submit";
button.innerHTML = "Проверить мои результаты";

page.appendChild(header);
page.insertBefore(list, null);
list.insertBefore(question, null);
question.insertBefore(variant, null);
question.insertBefore(variant2, null);
question.insertBefore(variant3, null);
list.insertBefore(question2, null);
question2.insertBefore(variant4, null);
question2.insertBefore(variant5, null);
question2.insertBefore(variant6, null);
list.insertBefore(question3, null);
question3.insertBefore(variant7, null);
question3.insertBefore(variant8, null);
question3.insertBefore(variant9, null);
page.insertBefore(button, null);
*/
