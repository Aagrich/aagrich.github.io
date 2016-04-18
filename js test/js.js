var a;
var b;
var arr;
a = 3; //+prompt('Введите число', '');
b = 4; //+prompt('Введите степень', '');
arr = [a];

function pow( a , b, c ) {
 for (var i = 1; i < b; i++) {
  console.log("a=", b);
  console.log("b=",b);
  var _result;
  var x;
   x = arr.length-1;
   console.log("x=", x);
   c=arr[x]*a;
   arr.push(c);
   
   _result = arr[x+1];
   console.log("result=", _result);
   console.log(arr[1]);
  }
}

console.log(pow( a, b));