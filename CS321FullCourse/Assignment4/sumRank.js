"use strict";
/*eslint-disable*/
const Iter = require('./sequance.js');
function sumRank(L) {
    if (L.size() === 0) {
        throw Error("empty List");
    }

    return sumHelper(L, 0);
}
function sumHelper(L, p) {
    if (p === L.size() - 1) {
        return L.elemAtRank(p);
    }
    sum = sumHelper(L, p + 1);
    return sum + L.elemAtRank(p);
}


let list = new Iter.Sequence()
list.insertFirst(9)
list.insertFirst(4)
list.insertFirst(7)
list.insertFirst(19)
list.insertFirst(8)
console.log(sumRank(list))
//console.log(list)