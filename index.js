const a = {
    key: 'value',
    key2: 'value2'
}

const b = {
    key: 'value',
    key2: 'value2'
}

const c = {
    key: 123,
    key2: 'value2'
}


function checkObject (object1, object2) {
   for (let i in object1) {
    for (let j in object2) {
        if (object1[i] === object2[j]) {
            return true
        } else {
            return false
        }
    }
   }
}
