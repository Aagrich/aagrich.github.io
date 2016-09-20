var numbersOfUsers;
var listOfUsers;
var x;
var allow = ",  Вы успешно вошли";

numbersOfUsers = 5;
x = numbersOfUsers;
listOfUsers = ["0"];



function addUsers(x) {
     for ( i = 0 ; i < x; i++) {
          var userName;
          userName = prompt("Введите имя нового пользователя:", "");
          listOfUsers.push(userName);
     }
}
function lookForUser() {
          var login;
          var result;
          login = prompt("Введите имя пользователя для входа", "");
          result = listOfUsers.indexOf(login, 0);
          if (result == -1) {
          return "Error!";
          }
          if (result > 0) {
          return listOfUsers[result] + allow;
          }
          return "Error!";
     }
function findUser() {
          login = prompt("Введите имя пользователя для входа", "");
          for ( i = 0; i < x+1; i ++ ) {
          if (listOfUsers[i] === login)
               return listOfUsers[i] + allow;
     }
              return "Error!";
     }
addUsers(x);
alert(findUser());
