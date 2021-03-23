"use strict";
/*eslint-disable*/
const prompt = require("prompt-sync")();
let age = +prompt("What is your age?", 18);
let welcome;
if (age < 18) {
    welcome = function () {
        console.log("Hello!");
    };
} else {
    welcome = function () {
        console.log("Greetings!");
    };
}
welcome();