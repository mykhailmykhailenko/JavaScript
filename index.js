'use strict'

function User (firstName, lastName, age, mail, isSubscribe) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.mail = mail;
    this.isSubscribe = isSubscribe;
}

function getRandomArbitrary (min, max) {
    return Math.round(Math.random() * (max-min) + min);
}

function createArrayOfUsers (quantity){
    const userArr = [];
    for (let i = 0; i < quantity; i++) {
        const user = new User(`Name ${i}`, `LastName ${i}`, getRandomArbitrary(1, 100), `mail${i}@com`, Boolean(getRandomArbitrary(0, 1)))
        userArr.push(user);
    }
return userArr
}

const arrUsers = createArrayOfUsers(50);
// console.table(arrUsers)



const userNames = arrUsers.map(function (userObj) {
    return `${userObj.firstName} ${userObj.lastName}`
})
// console.log(userNames)

arrUsers.sort(function(usA, usB) {
    return usA.age - usB.age;
})

const filteredAge = arrUsers.filter(function (elem) {
    return elem.age >= 18 && elem.isSubscribe === true
})
// console.table(filteredAge)

const userMails = filteredAge.map(function (obj) {
    return obj.mail
})
console.log(userMails)
