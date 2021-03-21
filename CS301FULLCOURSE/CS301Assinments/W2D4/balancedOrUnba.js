"use strict";
/**
 * @param {String} balanced to check weather balance or not
 * @return {boolean} true or false 
*/
function balance(balanced) {
    const newArray = [];
    for (const element of balanced) {
        if (element === "(" || element === "[" || element === "{") {
            balanced.pop(element);
            newArray.push(element);
        }
    }
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] !== balanced[i]) {
            return false;
        }
    }
    return true;
}
const balanced = ["(", ")", "(", "[", "{", "}", "]", ")"];
console.log(balance(balanced));