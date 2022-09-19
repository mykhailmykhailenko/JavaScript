function multiplicateOfTwo (a, b) {
    let result = a * b;
    return result
}

let res = multiplicateOfTwo(2, 3);
console.log(res)

function theBiggerOfTwo (a, b) {
    // debugger
    if (a > b) {
        console.log(a)
    } else {
        console.log(b)
    }
}

theBiggerOfTwo (21, 68)

function theBiggerOfTwo1 (a, b) {
    // debugger
    if (a > b) {
        return a
    } else {
        return b
    }
}

let number = theBiggerOfTwo1 (21, 68);
console.log(number);

