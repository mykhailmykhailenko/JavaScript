'use strict'

const arr = [1, 2, 3, 4, 5, 6];

const [firstElem, secondElem,,,fiveElement] = arr;

const [first, ...restOfArray] = arr;

function getStringOfCortege([first, second]) {
    return `${first} ${second}`
}



/*
перетворити меп у ['1 - johndoe', '2 - janedoe', '3 - alexdoe']
const map = new Map([[1, {username: 'john doe'}], [2, {username: 'janedoe'}], [3, {username: 'alexdoe'}]]);
[...map.entries()].map((cortege)=>{
    return `${cortege[0]} ${cortege[1].username}`
}) 
-----> 
[...map.entries()].map(([key, {username}])=>{
    return `${key} ${username}`
})
*/



const settings = {
    width: 200,
    height: 400
}

function getSet({width, height, on = false}){
    console.log(`${width} ${height} ${on}`)
}

const us = {
    name: {
        first: 'Ricky'
    },
    pass: '1234'
}


const {
    name: {
        first: userFirstName, 
        last: userLastName = 'Anonumus'
    }, 
    pass = 'qwerty'} = us;
