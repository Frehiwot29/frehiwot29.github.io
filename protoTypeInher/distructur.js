"use strict";
/*eslint-disable*/
// Consider this object
const person = {
    head: {
        eyes: 'x',
        mouth: {
            teeth: 'x',
            tongue: 'x'
        }
    },
    body: {
        shoulders: 'x',
        chest: 'x',
        arms: 'x',
        hands: 'x',
        legs: 'x'
    }
};
// If we want to get head, the old way:
let head = person.head;
// ES6 Destructuring
//let { head } = person;
// We can give other name as if a variable was declared, in the same line
let { head: myHead } = person;
// So we can do...
console.log(myHead);