"use strict";
/*eslint-disable*/
const List = require("./list");
function removeDupli(L) {
    let list = new List.List();
    cloneList(list, L);
    let p = list.first()
    while (!list.isLast(p)) {
        if (contains(list, p.element(), list.after(p))) {
            p = list.after(p)
            list.remove(list.before(p))
        } else {
            p = list.after(p)
        }
    }
    return list;
}
function cloneList(list, L) {
    let p = L.first();
    while (!L.isLast(p)) {
        list.insertFirst(p.element())
        p = L.after(p)
    }
    list.insertFirst(p.element());
}
function contains(list, e, p) {
    if (e === p.element())
        return true;
    if (list.isLast(p))
        return false;
    return contains(list, e, list.after(p))
}
let num = new List.List()
num.insertFirst(12)
num.insertFirst(11)
num.insertFirst(122)
num.insertFirst(123)
num.insertFirst(12)
num.insertFirst(12)
num.insertFirst(134)
num.insertFirst(342)
console.log(num.toString());
let seq = removeDupli(num);
console.log(seq.toString());
console.log(num.toString());