"use strict";
/*eslint-disable*/
/**
 * R-4.5 Suppose we are given two n-element sorted sequences A and B that should not 
 * be viewed as sets (that is, A and B may contain duplicate entries). Give an O(n)-time 
 * pseudo-code algorithm for computing a sequence representing the set A U B (with no duplicates).
 * 
 */
const { List } = require("./list");
function listUnion(A, B) {
    let union = new List();
    let a = A.first();
    let b = B.first();
    if (a.element() > b.element()) union.insertLast(b.element());
    else union.insertLast(a.element());
    while (!(A.isEmpty() || B.isEmpty())) {
        a = A.first();
        b = B.first();
        if (a.element() === b.element()) {
            if (!contains(union, a.element(), union.first())) {
                union.insertLast(a.element());
            }
            A.remove(a);
            B.remove(b);
        } else if (a.element() < b.element()) {
            if (!contains(union, a.element(), union.first())) {
                union.insertLast(a.element());
            }
            a = A.remove(a);
        } else {
            if (!contains(union, b.element(), union.first())) {
                union.insertLast(b.element());
            }
            b = B.remove(b);
        }
    }
    while (!A.isEmpty()) {
        a = A.first();
        if (!contains(union, a.element(), union.first())) {
            union.insertLast(a.element());
        }
        a = A.remove(a);
    }
    while (!B.isEmpty()) {
        b = B.first();
        if (!contains(union, b.element(), union.first())) {
            union.insertLast(b.element());
        }
        b = B.remove(b);
    }
    return union;
}
function contains(list, e, p) {
    if (list.isEmpty()) return false;
    if (e === p.element()) return true; //n
    if (list.isLast(p)) return false;
    return contains(list, e, list.after(p)); //n
}
let list = new List();
list.insertFirst(9);
list.insertFirst(4);
list.insertFirst(3);
let list1 = new List();
list1.insertFirst(16);
list1.insertFirst(12);
list1.insertFirst(11);
list1.insertFirst(10);
list1.insertFirst(3);
list1.insertFirst(2);
list1.insertFirst(2);
list1.insertFirst(1);
let union = listUnion(list, list1);
console.log(toArrayV(union));
function toArrayV(union) {
    let p = union.first();
    let result = [];
    while (!union.isLast(p)) {
        result.push(p.element());
        p = union.after(p);
    }
    result.push(p.element());
    return result;
}