'use strict';

$(function () {
  var questiong = [{
    name: 'Who?',
    options: ['John', 'Nick', 'Jack', 'Mike'],
    answer: ['John', 'Mike']
  }, {
    name: 'Where?',
    options: ['Here', 'There', 'Near', 'Nowhere'],
    answer: ['Near']
  }, {
    name: 'When?',
    options: ['Today', 'Tommorow', 'Yesterday', 'Never'],
    answer: ['Never']
  }];

  var makeTest = function makeTest(test) {

    function makeVariant(question, page) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {

        for (var _iterator = question.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var a = _step.value;

          var variant = document.createElement('label');
          var x = '\n\t\t\t\t\t\t\t' + '<input name=' + ' ' + question.name + ' ' + 'type=checkbox' + ' ' + 'value=' + ' ' + a + ' ' + '>' + ' ' + a + ' ';
          variant.innerHTML = x;
          page.appendChild(variant);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      ;
    };

    var testList = document.createElement('ol');

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = test[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var question = _step2.value;


        var punct = document.createElement('li');
        var x = '' + question.name;
        punct.innerHTML = x;
        testList.appendChild(punct);
        makeVariant(question, testList);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    ;
    return testList;
  };

  function checkTest(test) {
    var answers = void 0;

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = test[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        //	console.log(test.question.answer);
        //	for (let value of test.question.answer) {
        //		answers.push(value);
        //		}

        var question = _step3.value;
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    console.log('answers =' + answers);
    var userAnswers = document.getElementsByClassName('.selected');
    console.log('userAnswers = ' + userAnswers);

    //			for (let value of answers) {
    //				if (userAnswers.indexOf(value) == -1) {
    //					return false;
    //				};
    //				return true;
    //			};
  };

  function showResult(result, pageId) {
    var page = document.getElementById(pageId);
    var message = void 0;
    if (result === true) {
      message = "Good RESULT!";
    } else {
      message = "BAD result!";
    };

    var modalWindow = document.createElement('div');
    modalWindow.className = 'window-wrapper';
    modalWindow.innerHTML = '<div class = modal-window><p>' + '\n  \t\t' + message + '\n  \t\t' + '</p></div>' + ' ' + '<button class=OKbutton> OK </button>';
    $('.OKbutton').click(function () {
      $('.window-wrapper').remove();
    });
    $('.OKbutton').onclick = function () {
      console.log('click');
    };
    page.appendChild(modalWindow);
  };

  function pushTest(test, pageId) {
    var page = document.getElementById(pageId);
    var button = document.createElement('button');
    var testName = document.createElement('h1');
    testName.innerHTML = 'Test "Who? Where? When?"';
    page.appendChild(testName);
    page.appendChild(test);
    $('ol').jCheckbox('left');
    button.innerHTML = 'Show my result';
    button.onclick = function () {
      showResult(checkTest(questiong), pageId);
    };
    page.appendChild(button);
    ;
  };

  pushTest(makeTest(questiong), 'test_window');
});
//# sourceMappingURL=testing.js.map
