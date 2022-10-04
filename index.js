'use strict'

function pow (base, power) {
    let res = 1;
    if (typeof base !== 'number' || typeof power !== 'number') {
        throw new TypeError ('base and power must be a number')
    }
    if (power <= 0) {
        throw new RangeError ('power must be more than 0')
    }
    for (let i =0; i < power; i++) {
        res *= base;
    }
    return res
}