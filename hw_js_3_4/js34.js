 var testPage = {

  tagPosition: null,

 	addElement: function(task) {
    var element = document.createElement(task.tag);
   
    if (task.tagClass){
      element.className = task.tagClass;
    }
    if (task.tagId){
      element.setAttribute('id', task.tagId);
    }
    if (task.tagType){
      element.setAttribute('type', task.tagType);
    }
    if (task.tagValue){
      element.setAttribute('value', task.tagValue);
    }
    if (task.tagContent){
      element.innerHTML = task.tagContent;
    }
    if (task.tagParent){
      task.tagParent.insertBefore(element, task.tagPosition);
    }
    return element;
 }
}
var body = document.querySelector('body');


testPage.addElement({
  tag: 'div',
  tagParent: body
});
var div = document.querySelector('div');
testPage.addElement({
  tag: 'p',
  tagContent: 'Тест по програмированию',
  tagParent: div
  });

testPage.addElement ({
  tag: 'ul',
  tagId: 'first',
  tagParent: div
})

var list = div.getElementById(first);


testPage.addElement ({
  tag: 'li',
  tagContent: 'Вопрос №1'
  tagParent: list
})


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
