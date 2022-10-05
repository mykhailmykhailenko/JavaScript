'use strict'

class Vallidator {

  constructor (from, to) {
    this.from = from;
    this.to = to;
  }
  
  set from(value) {
    if(typeof value !== 'number') {
      throw new TypeError('from must be a number')
    }
    this._from = value;
  }
  get from() {
    return this._from
  }

  set to(value) {
    if(typeof value !== 'number') {
      throw new TypeError('to must be a number')
    }
    this._to = value;
  }
  get to() {
    return this._to
  }
  
  get range() {
      let arr = [];
      for (let i = this._from; i <= this._to; i++) {
        arr.push(i)
      }
      return arr
    }
    
  checkNumber (number) {
    return this.range.includes(number)
  }


}

const test1 = new Vallidator(2, 5);