var a;
var b;
var arr;
var result2;

a = Math.abs(+prompt('Введите число', ''));
b = Math.abs(+prompt('Введите степень', ''));
arr = [a];

function calculate( a, b) {
 for (var i = 1; i < b; i++) {
  
  var x;
  var c;
  
   x = arr.length-1;
   c=arr[x]*a;
   arr.push(c);
  }
}
 function pow() {
  if ( b > 1) {
     calculate( a , b );
  }
  if ( b === 1) {
     arr.push(a);
  }
  if ( b < 1 & b > 0) {
     arr.push(1/arr[b-1]);  //fix it later! (watch webinar)
  }
  //  if ( b === 0 || b === undefined || b === NaN) {
  //    arr.push('0');
  // }                       -  Dond forget!
 }
 
 pow();

console.log("Результатом ", a , " в " , b , " степени будет " , arr[b-1]);

function test2(a, b) {
  for (var i = 1; i < b; ++i) {
    a = a*a;
  }
  return a;
}
result2 = test2(a,b);

console.log( "second result will be = ", result2);