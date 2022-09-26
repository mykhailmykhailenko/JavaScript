'use strict'

// const user1 = {
//     firstName: 'Alex',
//     lastName: 'Grow',
//     age: 15,
//     getName: function () {
//         console.log(this.firstName + this.lastName);
//     }
// }


// const user2 = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 15,
//     getName: function () {
//         console.log(this.firstName + this.lastName);
//     }
// }

function User(firstName, lastName) {
    // {}, кладе його у this
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = 20;
    this.sayHello = function() {
        console.log(this.firstName + ' say: "Hello"');
    }
}


const us = new User('Jack', 'Sparrow');
us.firstName;


/*
Функція-конструктор Car
Машина має властивості:
бренд
модель
об'єм двигуна
кількість місць
максимальну швидкість
+поточна швидкість
Машина вміє:
їздити (run()) - метод виводить на консоль, що конкретно ось ця машина їде
зупинятись (stop()) - метод виводить на консоль, що конкретно ось ця машина зупинилась
+розганятись (accelerate(value)) - розганяє машину, додавши value до поточної швидкості. Швидше за максимальну швидкість ми розігнатись не можемо. 
+сповільнюватись (deaccelerate(value)) - сповільнює машину, віднявши value від поточної швидкості.
Якщо швидкість доходить до нуля - зупиняємо машину.
*/


function Car(brand, model, engineVolume, seatsQuantity, maxSpeed) {
    this.brand = brand;
    this.model = model;
    this.engineVolume = engineVolume;
    this.seatsQuantity = seatsQuantity;
    this.maxSpeed = maxSpeed;

    this.currentSpeed = 0;

    this.run = function () {
        return this.model + ' is running with ' + this.currentSpeed + ' km/h';
    }
    this.stop = function() {
        this.currentSpeed = 0;
       return this.model + ' is stopped';
    }
    this.accelerate = function(value) {
        this.currentSpeed += value;
        if(this.currentSpeed > this.maxSpeed) {
            this.currentSpeed = this.maxSpeed;
        }
        return this.run();
    }
    this.deaccelerate = function(value) {
        this.currentSpeed -= value;
        if(this.currentSpeed < 0) {
            return this.stop();
        }
        return this.run();
    }
}