"use strict";
/*eslint-disable*/
/*const prompt = require("prompt-sync")();
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
welcome();*/

/**
 * 
 */
/*let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];
// returns array of the first two users
let someUsers = users.filter(item => item.id < 2);
console.log(someUsers);*/

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]


const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
//
