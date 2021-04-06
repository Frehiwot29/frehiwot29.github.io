"use strict";
/*eslint-disable*/
let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};
let node4 = {
    name: "label",
    value: "Name",
    children: null
};
let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
};
/*function child(node) {
    if (node.children === null) return;
    for (let ch of node.children) {
        console.log(ch);
        child(ch);
    }
}
child(node1);*/
// function display(node, reuslt = []) {
//     console.log(node.name, ":", node.value);
//     if (node.children === null) return reuslt;
//     for (let element of node.children) {
//         console.log(element);
//         display(element, reuslt);
//     }
// }
//display(node1);

function display(node, result = []) {
    if (node.children)
        result.push(node.name + " " + node.value)
    for (let node of node.children) {
        display(node, result)
    }
    return result
}
console.log(display(node1))
