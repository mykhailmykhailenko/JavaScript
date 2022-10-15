'use strict'

class Stack {
    constructor(maxSize = 10, ...arr){
        this._maxSize = maxSize;
        this._size = 0;
        for (const item of arr) {
            this.push(item);
        }
    }

    get size() {
        return this._size;
    }

    get isEmpty() {
        return this._size === 0;
    }

    push(value) {
        if(this._size >= this._maxSize){
            throw new RangeError('Stack overflow');
        }
        this[`_${this.size}`] = value;
        return ++this._size;
    }

    pop(){
        const lastItem = this[`_${this.size-1}`];
        delete this[`_${this.size-1}`];
        this._size--;
        return lastItem;
    }


    pick() {
        return this[`_${this.size-1}`]
    }
}

/*
Парні дужки
()[] // true
{([])} //true
(}[)]) //false
{ // false
Написати функцію, яка перевіряє переданий їй рядок на симетричність дужок.
Пари дужок краще зберігати в об'єкті
{
    '(':')',
    '{':'}',
    '[':']'
}
1. Пройтись циклом по рядку.
2. Якщо символ, який перед нами на цій ітерації - це відкриваюча дужка, то ми її зберігаємо в стек.
3. Якщо перед нами закриваюча дужка, то ми заглядаємо в стек і дивимось, чи є вона тою самою закриваючою, парною до цієї.
        Якщо вона парна, вони обидві аннігілюються
        Якщо це не пара до відкриваючої - одразу повертаєм false
4. Якщо ми дійшли до кінця рядку - треба проаналізувати, чи лишилось щось у стеку.
*/


function checkSequence(str, braces) {
    const stack = new Stack(str.length);
    const closeBraces = Object.values(braces);
    for (const symb of str) {
          if(braces[symb]){
            stack.push(symb);
            continue;
          }
          if(closeBraces.includes(symb) && stack.isEmpty){
            return false
          }
          const lastItemFromStack = stack.pick();
          const correctCloseBrace = braces[lastItemFromStack]
          if(symb === correctCloseBrace){
            stack.pop();
          } else if (closeBraces.includes(symb) || braces[symb]){
            return false;
          }
    }

    return stack.isEmpty
}


const braces = {
    '(':')',
    '{':'}',
    '[':']'
}

checkSequence('({})[]', braces) 




