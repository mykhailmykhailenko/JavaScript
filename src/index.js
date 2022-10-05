'use strict'


// const pow2 = (base, power) => (power === 1) ? base : pow2(base, power - 1);


/*
Дан масив: [2, 3, 2, 1, [4, 2, 3, [6, 3,2, [3], 3, 3], 2]]
Задача - порахувати суму всіх елементів масива і вкладених масивів
Не використовувати методи масивів
*/

const arr = [2, 3, 2, 1, [4, 2, 3, [6, 3,2, [3], 3, 3], 2]];

function sumOfArrays(array){
        let sum = 0;
        for (let i=0; i< array.length; i++) {
                if(Array.isArray(array[i])) {
                        sum += sumOfArrays(array[i]);
                } else {
                         sum += array[i];
                }
        }

        return sum;
}


console.log(sumOfArrays(arr));


const arr2 = [5, 1, 3, 4, [5, 3, 2, [2, 10]]];

console.log(sumOfArrays(arr2));