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
        arr.push(user);
    }
return userArr
}

