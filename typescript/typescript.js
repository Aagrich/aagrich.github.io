var Greeting = (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Starting script...");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
var num = 2;
console.log("num = " + num);
console.log('changing num to string with number');
num = '12';
console.log("now num is = " + num);
console.log('please go to the compiler log!');
console.log('script stopped!');
