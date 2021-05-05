"use strict";
/*eslint-disable*/
const Iter = require('./list');
const Iter1 = require('./sequance.js');
function sortRB(L) {
    let nextRed = L.first();
    while (!L.isLast() && nextRed.element() === RED) {
        nextRed = L.after(nextRed);
        let p = nextRed;
        while (!L.isLast(p)) {
            if (p.element() === RED) {
                L.swapElements(p, nextRed)
                nextRed = L.after(nextRed)
                p = L.after(p);
            }
        }
    }
    return p;
}
let list = new Iter.List()
let list1 = new Iter1.Sequence()
list1.insertFirst("R")
list1.insertFirst("B")
list1.insertFirst("B")
list1.insertFirst("R")
list1.insertFirst("B")
list1.insertFirst("R")
list1.insertFirst("R")

// list.insertFirst("R")
// list.insertFirst("B")
// list.insertFirst("B")
// list.insertFirst("R")
// list.insertFirst("B")
// list.insertFirst("R")
// list.insertFirst("R")
sortRB(list1)
console.log(list);