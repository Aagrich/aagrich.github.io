var a;
var b;
var result2;

a = Math.abs(+prompt('Введите число', ''));
b = Math.abs(+prompt('Введите степень', ''));

function pow(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Введенные даные не являются числом! обновите страницу и введите числа!";
  }
  if (b == 1) {
    return a;
  }
  if (b == 0) {
    return 1;
  }
  else var result = a * pow(a, b-1);
  return result;
}
result2 = pow(a, b);
console.log( "Результатом ", a , " в " , b , " степени будет " , result2);


//  
//  
//  var arr;
//  arr = [a];
//  
//  function calculate( a, b) {
//   for (var i = 1; i < b; i++) {
//    
//    var x;
//    var c;
//    
//     x = arr.length-1;
//     c=arr[x]*a;
//     arr.push(c);
//    }
//  }
//   function pow() {
//    if ( b > 1) {
//       calculate( a , b );
//    }
//    if ( b === 1) {
//       arr.push(a);
//    }
//    if ( b < 1 & b > 0) {
//       arr.push(1/arr[b-1]);  //fix it later! 
//    }
//    //  if ( b === 0 || b === undefined || b === NaN) {
//    //    arr.push('0');
//    // }                       -  Dond forget!
//   }
//   
//   pow();
//   
//   console.log("Результатом ", a , " в " , b , " степени будет " , arr[b-1]);