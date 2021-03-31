"use strict";
/*eslint-disable*/
/*function sayHi() {
    console.log("Hello");
}
const myHi = sayHi;
console.log(sayHi);*/

/*function sayHi() {
    console.log("Hello");
}
const myHi1 = sayHi;
console.log(sayHi); // shows the function code
function higherOrder() { return sayHi; }
higherOrder();
//callback
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
function showOk() {
    console.log("You agreed.");
}
function showCancel() {
    console.log("You canceled the execution.");
}
function showMenu() {
    console.log("you are the menu");
}
ask("Do you agree?", showOk, showCancel, showMenu);*/



//sum the values of the matrix using indexed loops and then for of loops
//product the values of the matrix using indexed loops and then for of loops
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 5, 6]];
let sum = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++)
        sum += matrix[i][j];

}
console.log(sum);
let sum2 = 0;
for (const inner of matrix) {
    for (const number of inner) {
        sum2 += number;

    }
}
console.log(sum2)

/*const prompt = require("prompt-sync")();
let user = {
    name: "John",
    age: 30
};
let key = prompt("What do you want to know about the user?", "name");
// access by variable
console.log(user[key]); // John (if enter "name")*/