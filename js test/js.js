var a;
var b;
var arr;

a = +prompt('Введите число', '');
b = +prompt('Введите степень', '');
arr = [a];

function pow( a, b) {
 for (var i = 1; i < b; i++) {
  
  var x;
  var c;
  
   x = arr.length-1;
   c=arr[x]*a;
   arr.push(c);
  }
}
pow(a, b);

alert(arr[b-1]);