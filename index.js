'use strict'

function divDiap(start, end){
    for (let i = start; i <= end; i++) {
        const divArray = [];
        for (let j=1; j <= i; j++) {
            if(i % j === 0) {
                    divArray.push(j);
            }
        }
          console.log(i + ' - ', divArray)   
    // console.log(`${i} - ${divArray.join(' ')}`)
    }
}