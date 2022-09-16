/* 

numeric types 

*/

let a = 3;
let b = 5;
let c;
c = a + b;
c = a - b;
c = a * b;
c = a / b;
c = a / 0; // Infinity
c = a / Infinity; //0
c = 5 / 'a'; // NaN
c = 'Hello' + 'World'; // 'HelloWorld' конкатинація рядків (завжди повертає рядок)
c = 'Hello' * 'World'; // NaN
c = 4 + 'hello'; // '4hello'
c = null + ''; // 'null'
c = true + ''; // 'true'

с = '23' * 1; // 23
с = '23' - 0; // 23
c = Number('23') // 23

Boolean('') // false
Boolean(null) // false
Boolean(undefined) // false
Boolean('1') // true
Boolean(2) // true
Boolean({}) // true


console.log(c);