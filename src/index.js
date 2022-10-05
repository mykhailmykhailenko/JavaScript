'use strict'


/*
Клас Друг
Властивості:
- має ім'я
- має власні кошти
- має друга, який теж має власні кошти.
- друг може мати друга, або не мати (null)
Метод класу
countMoney() 
Порахувати загальну кількість грошей у вас і вашого друга (і друга вашого друга)
*/


class Friend{
    constructor(name, ownAmount, friend) {
        this.name = name;
        this.ownAmount = ownAmount;
        this.friend = friend;
    }

    countMoney() {
        if(this.friend === null) {
            return this.ownAmount;
        }
        if(Array.isArray(this.friend)) {
            return this.ownAmount + this.friend.reduce((money, friend)=>(money + friend.countMoney()), 0)
        }
        return this.ownAmount + this.friend.countMoney();
    }
}

const friend0 = new Friend('Jane', 50, null);

const friend1 = new Friend('Alex', 20, null);

const friend2 = new Friend('John', 10, friend1);

const friend3 = new Friend('Tony', 20, [friend2, friend0]);