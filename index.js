// Калькулятор

// let num1 = Number(prompt('Введите первое целое число'));
// let num2 = Number(prompt('Введите второе целое число'));
// let whatToDo = prompt('Введите знак десйствия');
// let sum;

// switch (whatToDo) {
//     case '+' : sum = num1 + num2;
//     break
//     case '-' : sum = num1 - num2;
//     break
//     case '*' : sum = num1 * num2;
//     break
//     case '/' : sum = num1 / num2;
//     break
// }

// console.log(sum)



// let imageSrc = userAvatar ? userAvatar : imagePlaceholder;

// let userName = prompt('Як вас звати?')

// if (userName)  {
//     console.log('Hello ' + userName);
// } else {
//     console.log('Hello anonim');
// }



// let correctPassword = 'GoodPassword';
// let userPassword = '';

// do {
//     userPassword = prompt('Введите пароль:');
// } while (userPassword !== correctPassword)

// console.log('Пароль правильний');

// let i = 0;

// while (i < 10) {
//     i++
//     if (i % 2) {
//         console.log(i);
//     } else {

//     }
// }



// let k = 0;
// let sum = 0;

// while (k++ < 5) {
//     sum = sum + k;
// }

// console.log(sum);



// function factorial (number) {
//     let sum = 1;
//     for (let i = 1; i <= number; i++) {
//         sum = sum * i;
//     }
//     return sum;
// }

// function pow (base, power) {
//     let sum = 1;
//     for (let i = 1; i <= power; i++) {
//         sum = sum * base;
//     }
//     return sum
// }

let sum = 0;
function findDivider (number) {
    for (let i = 0; i <= number; i++ ) {
       if (number % i === 0) {
            console.log(i)
       }
    }
}

