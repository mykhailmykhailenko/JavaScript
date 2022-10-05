'use strict'


/*
Вивести на консоль перші 100 членів ряду Фібоначчі
F(n) = F(n-1) + F(n-2)
F(1) = 1
F(2) = 1
*/


function fn(n) {
    if(n === 0 ) {
            return 0;
    }
    if(n===2 || n===1) {
            return 1
    }
    return fn(n-1) + fn(n-2)
}

for (let i = 0; i<10; i++) {
    console.log(fn(i));
}