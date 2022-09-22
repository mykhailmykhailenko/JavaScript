// for (ініціалізація ; умова ; інкрементація; ) {
//     блок коду
// }

// for (let a = 0; a <= 10; a++) {
//     console.log(a)
// }


// function areaRectangle (width, height) {
//     let result = width * height
//     return result
// }

// areaRectangle (5, 10)

// function circleLength (diameter) {
//     const PI = 3.14;
//     let result = PI * diameter
//     return result
// }

// circleLength (5)

// for (let i = 1; i <=100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz')
//     } else if (i % 5 === 0) {
//         console.log('Buzz')
//     } else if (i % 3 === 0) {
//         console.log('Fizz')
//     } else {
//         console.log(i)
//     }
// }

function calculate (number) {
    for (let i = 1; i <= number; i++) {
    console.log(number / i)
    }
    
}