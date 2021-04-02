"use strict";
/**
 * 
 * @param {String} value to
 * @return{String} value
 */
function TreeNode(value) {
    this.value = value;
    this.descendant = [];
    return this.value;

}
// create nodes with values
const abe = new TreeNode("Abe");
const homer = new TreeNode("Homer");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");
abe.descendant.push(homer);
homer.descendant.push(bart, lisa, maggie);
//Q1.
// console.log(abe.value);
// console.log(homer.value);
// console.log(bart.value);
// console.log(lisa.value);
// console.log(maggie.value);
//Q2.

let search1 = "lisa";
let search2 = "crush";
//console.log(this.value(item => item === search1));
//console.log(value(item => item === search2));
//console.log(contains(=== search2));
let tree = new TreeNode();
console.log(tree.descendant === this.search2);
console.log(tree.descendant === this.search1);
console.log(tree.descendant);
