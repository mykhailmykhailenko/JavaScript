const password = 'GoodPassword';


// let userValue = '';
// do {
//     userValue = prompt('Type your password');
// } while (userValue !== password);
// console.log('Password correct');

let k = 0;
let sum = 0;
while (k++ < 5) {
    debugger;
    if(k % 2) {
        continue;
    }
    sum += k;
}


console.log(sum);