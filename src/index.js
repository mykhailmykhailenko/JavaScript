'use strict'

/*
1. Пройтись циклом по рядку.
2. Для кожного символа, якщо він нам вже зустрічався, збільшити кількість входжень.
3. Якщо рядок не зустрічався - додати до MAp новий символ
*/


function createVocabulary (str) {
    const map = new Map();
    for (const symb of str) {
        if(map.has(symb)){
            const currValue = map.get(symb);
            map.set(symb, currValue+1);
        } else {
            map.set(symb, 1)
        }
    }
    return map;
}

function compareAnagramm(str1, str2) {

  const map1 = createVocabulary(str1);
  const map2 = createVocabulary(str2);

    if (map1.size !== map2.size) {
        return false
    }

    for (const key of map1.keys()) {
        if (map1.get(key) !== map2.get(key)){
            return false
        }
    }

    return true
}


