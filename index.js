// function User(firstName, lastName) {
//     // {}, кладе його у this
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = 20;
//     this.sayHello = function() {
//         console.log(this.firstName + ' say: "Hello"');
//     }
// }


// const us = new User('Jack', 'Sparrow');
// us.firstName;


/*
Функція-конструктор User.
Юзер має:
- ім'я
- прізвище
- вік
- мейл
- пароль
- залогінений (isLogIn) 
Методи:
- повне ім'я - повертає рядок з іменем і прізвищем
- signIn - приймає пароль, порівнюємо його з паролем, який зберігаємо, якщо вони співпадають - користувач буде залогінений. Якщо ні, відповідаємо "неправильний пароль"
*/

function User(firstName, lastName, age, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.password = password;
    this.isLogIn = false;
    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
    this.signIn = function(pass) {
        if( pass === this.password) {
            this.isLogIn = true;
            return 'You are logged in'
        } else {
            return 'Password incorrect'
        }
    }
}