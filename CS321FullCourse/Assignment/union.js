"use strict";

const { List } = require("../Assignment3/list");

/*eslint-disable*/
/**
 * R-4.5 Suppose we are given two n-element sorted sequences A and B that should not 
be viewed as sets (that is, A and B may contain duplicate entries). Give an O(n)-time 
pseudo-code algorithm for computing a sequence representing the set A  B (with no 
duplicates).

 * @param {*} A 
 * @param {*} B 
 */
function listUnion(A, B) {
    let union = new List();
    let a = A.first();
    let b = B.first();
    if (a.element() > b.element()) {
        union.insertLast(b.element());
    } else {
        union.insertLast(a.element())
    }
    while (!(A.isEmpty() || B.isEmpty())) {
        a = A.first();
        b = B.first();
        if (a.element() === b.element()) {
            if (!contains(union, a.element, union.first()))
                union.insertLast(a.element)
            A.remove(a);
            B.remove(b);
        } else if (a.element() < b.element()) {
            if (!contains(union, a.element(), union.first()))
                union.insertLast(a.element())
            a = A.remove(a);
        } else {
            if (!contains(union, b.element(), union.first()))
                union.insertLast(b.element())
            b = A.remove(b);
        }
    }
    return union;
}
function contains(list, e, p) {
    if (list.isEmpty()) return false;
    if (e === p.element()) return true;
    if (list.isLast(p)) return false;
    return contains(list, e, list.after(p));
}