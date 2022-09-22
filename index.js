function calculate (number) {
    for (let i = 0; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBazz');
        } else if (i % 5 === 0) {
            console.log('Bazz'); 
        } else if (i % 3 === 0) {
            console.log('Fizz'); 
        } else {
            console.log(i);
        }
    }
}
    
