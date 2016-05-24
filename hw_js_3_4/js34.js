 var tagList;
 var testBlock = {

  tagPosition: null,

 	addElement: function(task) {
    var element = document.createElement(task.tag);
    var label = document.createElement('label');

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
    if (task.tagVariant){
      var label = this.addElement({
        tag: 'label',
        tagContent: task.tagVariant,
        tagParent: task.tagParent
      })
      var checkbox = this.addElement({
        tag: 'input',
        tagType: 'checkbox',
        tagId: task.tagVarId
      })
      label.insertAdjacentElement('afterBegin', checkbox);

    }
    // if (task.tagLabel){
    //   mainList.insertBefore(label, task.tagPosition);
    //   var x = task.tagParent.querySelector('label');
    //   x.insertBefore(element, null);
    // }
    if (task.tagParent){
      task.tagParent.insertBefore(element, task.tagPosition);
    }
    return element;
 }
}
var body = document.querySelector('body');


testBlock.addElement({
  tag: 'div',
  tagId: 'container',
  tagClass:'container',
  tagParent: body
});
var container = document.getElementById('container');

testBlock.addElement({
  tag: 'p',
  tagClass: "header",
  tagContent: 'Тест по програмированию',
  tagParent: container
  });

testBlock.addElement ({
  tag: 'ol',
  tagClass: '',
  tagId: 'mainList',
  tagParent: container
})
var mainList = document.getElementById('mainList');

  testBlock.addElement({
    tag: 'li',
    tagId:'question1',
    tagClass: "checkbox",
    tagContent: 'Вопрос №1',
    tagParent: mainList
  })
  var question1 = document.getElementById('question1');

  testBlock.addElement({
        tagVariant: 'Вариант ответа  №1',
        tagVarId: 'q1v1',
        tagParent: question1
       })
  testBlock.addElement({
        tagVariant: 'Вариант ответа  №2',
        tagVarId: 'q1v2',
        tagParent: question1
       })
  testBlock.addElement({
        tagVariant: 'Вариант ответа  №3',
        tagVarId: 'q1v3',
        tagParent: question1
       })

  testBlock.addElement({
    tag: 'li',
    tagId:'question2',
    tagClass: "checkbox",
    tagContent: 'Вопрос №2',
    tagParent: mainList
  })
  var question2 = document.getElementById('question2');

  testBlock.addElement({
        tagVariant: 'Вариант ответа  №1',
        tagVarId: 'q2v1',
        tagParent: question2
       })
  testBlock.addElement({
        tagVariant: 'Вариант ответа  №2',
        tagVarId: 'q2v2',
        tagParent: question2
       })
  testBlock.addElement({
        tagVariant: 'Вариант ответа  №3',
        tagVarId: 'q2v3',
        tagParent: question2
       })

  testBlock.addElement({
    tag: 'li',
    tagId:'question3',
    tagClass: "checkbox",
    tagContent: 'Вопрос №3',
    tagParent: mainList
  })
  var question3 = document.getElementById('question3');

  testBlock.addElement({
        tagVariant: 'Вариант ответа  №1',
        tagVarId: 'q3v1',
        tagParent: question3
       })
  testBlock.addElement({
        tagVariant: 'Вариант ответа  №2',
        tagVarId: 'q3v2',
        tagParent: question3
       })
  testBlock.addElement({
        tagVariant: 'Вариант ответа  №3',
        tagVarId: 'q3v3',
        tagParent: question3
       })

testBlock.addElement({
    tag: "button",
    tagId: 'checkButton',
    tagClass: 'btn btn-primary btn-lg active',
    tagContent: "Проверить мои результаты",
    tagParent: mainList
})
var checkButton = document.getElementById('checkButton')
console.log(tagList);

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
