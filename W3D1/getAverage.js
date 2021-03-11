"use strict";
let arr = [{ name: "abc", age: 20 }, { name: "xyz", age: 10 }];


/**
 * 
 * @param {Array} users to av
 * @return {number} sum
 */
function getAverageAge(users) {
    let sum = 0;
    for (let i = 0; i < users.length; i++) {
        sum += users[i].age;
    }
    return sum / users.length;

}
console.log(getAverageAge(arr));