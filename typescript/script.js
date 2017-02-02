function test(message) {
    console.log(message);
};
test('start prototype!');

var human = {
    heigth: 192,
    width: 90,
    hands: 2,
    legs: 2,
    heads: 1,
//    message: function(tell) {
//    console.log(tell);
// }
}

function Person(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
};

Person.prototype = human;

var client = new Person('John', 'Snow', 22);

var echo = "We have a new client " + client.name + " " + client.lastname + " and he " + client.age + " years old!";

console.log(echo);



