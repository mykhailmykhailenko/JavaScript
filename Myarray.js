'use strict'

function MyArray () {
    this.length = 0;
}


function MyArrayMethods () {

    // this.push = function(value) {
    //     this[this.length] = value;
    //     return ++this.length;
    // }

    this.push = function() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
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


const protoArrayObject = new MyArrayMethods();

MyArray.prototype = protoArrayObject;