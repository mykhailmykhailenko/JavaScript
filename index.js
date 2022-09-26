/*
Функція-конструктор робітника (Worker). Робітник має ім'я, прізвище, ставку за день (rate), кількість відпрацьованих днів в цьому місяці.
Метод:
getSalary - має розрахувати, скільки робітник отримає зп в цьому місяці, засн. на ставці та кількості відпрацьованих днів.
*/

function Worker(firstName, lastName, rate, days) {
this.firstName = firstName;
this.lastName = lastName;
if(rate < 0) {
this.rate = 0;
} else {
this.rate = rate; 
}
if (days > 31) {
this.days = 31; 
} else {
this.days = days;
}
this.getSalary = function() {
return this.rate * this.days;
}

return this; // primitive will be ignored, this will be returned
}