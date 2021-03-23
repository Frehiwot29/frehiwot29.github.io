"use strict";
///*eslint-disable*/
/**
 * Arrays have a reverse method that changes the array by inverting the order in which its elements
appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first,
reverseArray, takes an array as argument and produces a new array that has the same elements in
the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it
modifies the array given as argument by reversing its elements. Neither may use the standard reverse
method.
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValuue);
// → [5, 4, 3, 2, 1]
 */
/**
 * 
 * @param {Array} arr to reverse
 * @return {Array} reverse
 */
function reverseArray(arr) {
    let result = [];
    let newarray = [];
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        newarray[j] = arr[i];
        result.push(newarray[j]);
        j++;
    }
    return result;
}
let num = [1, 2, 3, 4, 5];
let num1 = ["A", "B", "C"];
console.log(reverseArray(num));
console.log(reverseArray(num1));

