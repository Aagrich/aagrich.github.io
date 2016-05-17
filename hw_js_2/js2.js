var numbersOfUsers;
var listOfUsers;
var x;

numbersOfUsers = 3;
x = numbersOfUsers;
listOfUsers = ["0"];



function addUsers(x) {
     for (var i = 0 ; i < x; i++) {
          var userName;
          userName = prompt("Введите имя нового пользователя:", "");
          listOfUsers.push(userName);
    
     }
}
function lookForUser() {
          var login;
          var listLength;
          var result;
          var allow = ",  Вы успешно вошли";
          login = prompt("Введите имя пользователя для входа", "");
          listLength = listOfUsers.length;
          result = listOfUsers.indexOf(login, 0);
          if (result == -1) {
          return "Error!";
          }
          if (result > 0) {
          return listOfUsers[result] + allow;     
          }
          return "Error!";
     }

addUsers(x);

alert(lookForUser());