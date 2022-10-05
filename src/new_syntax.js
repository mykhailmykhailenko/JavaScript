class MyNewArray {
    constructor() {
        this.length = 0;
    }
    push() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    }
    pop() {
        let i = this[this.length -1];
        delete this[this.length -1];
        this.length--;
        return i
    }

    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i])
        }
    }

    map(callback) {
        const arr = new MyArray();
        for (let i = 0; i < this.length; i++){
            arr.push(callback(this[i]))
        }
        return arr
    }
    static isMyNewArray(obj) {
        return obj instanceof MyNewArray;
    }
    
}


const myarr = new MyNewArray();

MyNewArray.isMyNewArray(myarr) //true
