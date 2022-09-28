'use strict'

function MyArray () {
    this.length = 0;

    this.push = function(value) {
        this[this.length] = value;
        return ++this.length;
    }

    this.pop = function() {
        let i = this[this.length -1];
        delete this[this.length -1];
        this.length--;
        return i
    }

    this.forEach = function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i])
        }
    }

    this.map = function (callback) {
        const arr = new MyArray();
        for (let i = 0; i < this.length; i++){
            arr.push(callback(this[i]))
        }
        return arr
    }

}



// const arrNative = [2,3,4,5];

// function multyElem (num) {
//     return num * 2
// }
// const myArr = [];
// for (let i = 0; i < arrNative.length; i++) {
//     // myArr[i] = multyElem(arrNative[i])
//     myArr.push(multyElem(arrNative[i]))
// }
// console.log(myArr)