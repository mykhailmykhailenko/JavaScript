const password = 'GoodPassword';
let userPassword

do {
    userPassword = prompt('Введіть пароль:');
} while (password !== userPassword)


console.log('Пароль прaвильний')
