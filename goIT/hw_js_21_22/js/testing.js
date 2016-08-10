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

  function makeVariant(b) {

    var arrVariant = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = b.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var a = _step.value;
        var variant = '\n\t\t' + '<label>' + ' ' + '<input name=' + ' ' + b.name + ' ' + 'type=checkbox' + ' ' + 'value=' + ' ' + a + ' ' + '>' + ' ' + a + ' ' + '</label>';
        arrVariant.push(variant);
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
    return arrVariant;
  };

  var makeTest = function makeTest(test) {
    var testList = document.createElement('ol');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = test[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var question = _step2.value;

        testList.innerHTML = '<li>' + '  ' + question.name + '  ' + makeVariant(question);

        return testList;
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
  };
  function pushTest(test, pageId) {
    var page = document.getElementById(pageId);
    page.appendChild(test);
  };
  function checkTest(test) {

    var answers = function answers() {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = test[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var question = _step3.value;
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = test.question.answer[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var value = _step4.value;

              Answers.push(value);
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
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

      return Answers;
    };
    var userAnswers = querySelectorsAll('.selected');

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = answers[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var value = _step5.value;

        if (userAnswers.indexOf(value) == -1) {
          return false;
        };
        return true;
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    ;
  };
  function showResult(result) {
    var page = document.getElementById(pageId);
    var message = void 0;
    if (result === true) {
      message = "Good RESULT!";
    } else {
      message = "BAD result!";
    };
    var modalWindow = '<div class = window-wrapper><div class = modal-window><p>' + ' +\n  \t\t' + message + ' +\n  \t\t' + '</p></div> </div>' + ' + ' + '<button class=OKbutton> OK </button>';
    page.appendChild(modalWindow);
  };

  pushTest(makeTest(questiong), 'test_window');
});
//# sourceMappingURL=testing.js.map
