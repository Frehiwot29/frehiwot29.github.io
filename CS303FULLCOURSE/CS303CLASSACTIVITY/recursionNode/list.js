"use strict";
let node4 = {
    value: 5,
    next: null
};
let node3 = {
    value: 4,
    next: node4
};
let node2 = {
    value: 2,
    next: node3
};
let node1 = {
    value: 1,
    next: node2
};
let abc = node1.next.next.value;
console.log(abc);
console.log(abc === node3.value);
console.log(abc === 4);
let rest = node1.next.next.next.next;
console.log(rest);