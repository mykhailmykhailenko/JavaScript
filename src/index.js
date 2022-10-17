'use strict'

const {brigthness, resolution, ...restOfObject} = monitor;


function consoleValue({target: {value, name}}){
//    const {target: {value}} = event;
}

//event{
//    target:{
//        value,name
//    }
// }


const userObj = {
    name: {
        first: 'John',
        last: 'Doe',
        fatherName: 'Petrovich'
    },
    age: 20,
    auth: {
        email: 'doe@mail.com',
        pass: 'qwerty'
    }
};

function getFullName({name: {first, last, ...restOfName}, ...restOfUser}) {
    return `${first} ${last}`
}
