"use strict";
/*eslint-disable*/
const List = require("./sequance");


function issubSet(A, B) {
    let a = A.first();
    //let s1 = a.element()
    let b = B.first();
    //let s2 = b.element();
    while (!A.isLast(a)) {
        if (contains(B, a.element(), b))
            return true;
        a = A.after(a)
    }
    if (!contains(B, a.element(), b)) {
        return false;
    }
    return true;
}
function contains(list, e, p) {
    if (e === p.element())
        return true;
    if (list.isLast(p))
        return false;
    return contains(list, e, list.after(p))
}
let A = new List.Sequence();
let B = new List.Sequence();
A.insertFirst(5)
A.insertFirst(23)
A.insertFirst(34)
A.insertFirst(29)
B.insertFirst(5)
B.insertFirst(23)
B.insertFirst(34)
B.insertFirst(29)
B.insertFirst(9)
B.insertFirst(2)
B.insertFirst(19)
B.insertFirst(29)
console.log(issubSet(A.toString(A, B)))