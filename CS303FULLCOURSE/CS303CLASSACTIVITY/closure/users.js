"use strict";
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
//users.sort((a, b) => a.name > b.name ? 1 : -1);
/**
 * 
 * @param {String} fieldName to
 * @returns {Number} number
 */
function byField(fieldName) {
    return (num1, num2) => num1[fieldName] > num2[fieldName] ? 1 : -1;
}
console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));