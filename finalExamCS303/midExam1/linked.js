"use strict";
//linked list
let node4={
    value:5,
    next:null
};
let node3={
    value:4,
    next:node4
};
let node2={
    value:3,
    next:node3
};
let node1={
    value:2,
    next:node2
};
let node0={
    value:1,
    next:node1
};
let num=node1.next.next;
let num1=node0.next.next.next.next.value;
console.log(num1);