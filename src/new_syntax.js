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
        const arr = new MyNewArray();
        for (let i = 0; i < this.length; i++){
            arr.push(callback(this[i]))
        }
        return arr
    }

    concat (arr2) {
        for (let i = 0; i < arr2.length; i++) {
            this.push(arr2[i])
        }
        return this
    }

    flat() {
        const res = new MyNewArray();
        for (let i = 0; i < this.length; i++) {
            if (MyNewArray.isMyNewArray(this[i])) {
                res.concat(this[i].flat());
            } else {
                res.push(this[i]);
            }
        } 
        return res
    }

    reverse() {
       const len = this.length - 1;
        for (let i = 0; i <= len / 2; i++) {
            let tmp = this[i];
            this[i] = this[len - i];
            this[len - i] = tmp;
        }
        return this;
    }

    indexOf(value) {
        for (let i = 0; i < this.length; i++) {
            if (value === this[i]) {
                return i
            } 
        }
        return -1
    }

    includes(value) {
        for (let i = 0; i < this.length; i++) {
            if (value === this[i]) {
                return true
            } 
        }
        return false  
    }

    static isMyNewArray(obj) {
        return obj instanceof MyNewArray;
    }

    [Symbol.iterator] () {
        let i = 0;
        return {
            next: () => {
                return {
                    value: this[i++],
                    done: i > this.length
                }
            }
        }
    }

}




const myarr = new MyNewArray();

MyNewArray.isMyNewArray(myarr) //true


