class User {
    constructor(mail, password) {
        this.mail = mail;
        this.password = password;
        this.isBanned = false;
    }

    sayHello () {
        return `${this.mail} says: 'Hello!'`
    }

}

class Moderator extends User {
    constructor(mail, password) {
        super(mail, password)
    }

    giveBanned (obj) {
        return obj.isBanned = true;
    }
}

const user1 = new User('misha@ukr.net', '123321')
user1.sayHello()

const moderatorMain = new Moderator('moderatorMain@ukr.net', '123321');

moderatorMain.giveBanned(user1)