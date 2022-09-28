'use strict'

const arrNative = [2,3,4,5];

function multyElem (num) {
    return num * 2
}
const myArr = [];
for (let i = 0; i < arrNative.length; i++) {
    // myArr[i] = multyElem(arrNative[i])
    myArr.push(multyElem(arrNative[i]))
}
console.log(myArr)