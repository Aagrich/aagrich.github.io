var numbersOfUsers;
var listOfUsers;
var x;

numbersOfUsers = 3;
x = numbersOfUsers;
listOfUsers = ["Wrong name"];



function addUsers(x) {
     for (var i = 0 ; i < x; i++) {
          var userName;
          userName = prompt("Введите имя нового пользователя:", "");
          listOfUsers.push(userName);
          
     }
}
function lookForUser() {
          var userName;
          var listLength;
          userName = prompt("Введите имя пользователя для входа", "");
          listLength = listOfUsers.length;
          if (listOfUsers.indexOf(userName)) {
          return "Wellcome!";
          }
          else
          return "Dennided!";
     }


// addUsers(x);
// console.log(listOfUsers);
// alert(lookForUser());