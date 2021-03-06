"use strict";
/*eslint-disable*/
let company = { // the same object, compressed for brevity
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};
// The function to do the job
/**
 * 
 * @param {Object} department 
 * @return {number} the sum of one
 */
function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
        return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
        }
        return sum;
    }
}
console.log(sumSalaries(company)); // 6700
/**
 * 
 * @return {number} the max one
 */
function findMax() {
    var max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
const max1 = findMax(1, 123, 500, 115, 66, 88);
const max2 = findMax(3, 6, 8);
console.log("max1: " + max1);
console.log("max2: " + max2);

//recursive
function printCharsReverse(str) {
    if (str === null || str ===
        "") {
        return;
    } else {
        printCharsReverse(str.substring(1));
        console.log(str.charAt(0));
    }
}
printCharsReverse("abc");

