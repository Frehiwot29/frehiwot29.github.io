"use strict";
/*eslint-disable*/
const Iter = require('./sequance');
function isPermutation(A, B) {
    if (A.size() != B.size()) {
        return false;
    }
    let p = A.first();
    while (!A.isLast()) {
        if (!contains(B, p.element(), B.first())) {
            return false;
        }
        p = A.after(p)
        if (!contains(B, p.element(), B.first())) {
            return false;
        }
        else {
            return true;
        }
    }

}
function contains(B, elem, p) {
    if (elem === p.element()) {
        return true;
    }
    if (B.isLast(p)) {
        return false;
    } else {
        return contains(B, elem, B.after(p));
    }

}

function removeDuplicate(L) {
    let p = L.first();
    while (!L.isLast(p)) {
        if (contains(L, p.element(), L.after(p))) {
            p = L.after(p);
            L.remove(L.before(p))
        } else {
            p = L.after(p);
        }
    }
    return L;

}
let list = new Iter.Sequence();
list.insertFirst(12)
list.insertFirst(11)
list.insertFirst(12)
list.insertFirst(16)
list.insertFirst(12)
list.insertFirst(23)
isPermutation(list)
removeDuplicate(list)
console.log(list);
