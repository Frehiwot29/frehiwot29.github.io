"use strict";
/*eslint-disable*/
const Iter = require('./list.js');
const Iter1 = require('./sequance');
function findMax(L) {
    let p = L.first();
    return maxHelper(L, L.after(p), p.element());
}
function maxHelper(L, p, max) {
    if (L.isLast(p)) {
        return max;
    } else if (p.element() > max)
        max = p.element();

    return maxHelper(L, L.after(p), max);

}

//let myList = new Iter.List();
let myList1 = new Iter1.Sequence();
myList1.insertFirst(5)
myList1.insertFirst(6)
myList1.insertFirst(9)
myList1.insertFirst(12)
// myList.insertFirst(9)
// myList.insertFirst(6)
// myList.insertFirst(8)
// myList.insertFirst(3)
// myList.insertFirst(2);
//console.log(findMax(myList))
console.log(findMax(myList1))
//console.log(myList);