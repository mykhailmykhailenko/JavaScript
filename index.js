'use strict'

// TASK 1

// const obj1 = {
//     test: 'supervalue',
//     key: 1
// }

// function test () {
//     console.log(this.test);
// }

// const objectFunction = test.bind(obj1);

// // test.call(obj1)

// objectFunction ();



// TASK 2

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++)
//     {
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
//     console.log('----------------')
// } 

// табл множення


//TASK 3

// let stars = ''
// for (let i = 1; i <= 8; i++) {
//     for (let j = 1; j <= 1; j++)
//     {
//         stars += '*';
//     }
//     console.log(stars)
// } 

// прямокутний трикутник з зірочок

// TASK4

//variant 1
// let stars = '';
// function squa (dimention) {
//     for (let i = 0; i <= dimention ; i++) {
//         for (let j = 0; j <= dimention; j++){
//             if(i === 0 || i === dimention || j === 0 || j === dimention || i === dimention - j) {
//                 stars += '*';
//             }  else {
//                 stars += ' ';
//             }
//         }
//         stars += '\n'
//     }
//     console.log(stars)
// squa(10) 

// // variant 2
// let stars = '';
// function squa (dimention) {
//     for (let i = 0; i <= dimention ; i++) {
//         for (let j = 0; j <= dimention; j++){
//             if(i === 0 || i === dimention || j === 0 || j === dimention || i === j) {
//                 stars += '*';
//             }  else {
//                 stars += ' ';
//             }
//         }
//         stars += '\n'
//     }
//     console.log(stars)
// squa(10) 

//Hometask
// діапазон значень, вивести на консоль массив дільників кожного числа з цього діапазону

function divDiap (a, b){ 
    for (let i = a; i <= b; i++) {
        for (let j = 1; j <= b; j++){
            if (i % j === 0) {
                console.log(`${i} - ${j}`)
            }     
        }
    }
}