const prompt = require("prompt-sync")();
let num_Box = parseInt(prompt("Enter number of box: "));
let num_each_box = parseInt(prompt("Enter number of each box: "));
let stack = Math.ceil(num_Box / num_each_box);
console.log("Number of stack: " + stack);
