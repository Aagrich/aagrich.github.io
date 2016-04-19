var numbersOfUsers;
var listOfUsers;
var x;
numbersOfUsers = 1;
x = numbersOfUsers;
listOfUsers = [];


function addUsers(x) {
     for (var i = 0 ; i < x; i++) {
          var userName;
          userName = prompt("Введите имя нового пользователя:", "");
          listOfUsers.push(userName);
          
     }
}
function lookForUser() {
          var userName;
          userName = prompt("Введите имя пользователя для входа", "");
  
          if (userName === listOfUsers[i]) {
               alert("Welcome!");
          }
          else {
               alert("Wrong name!")
          }
     }

addUsers(x);
console.log(listOfUsers);
lookForUser();