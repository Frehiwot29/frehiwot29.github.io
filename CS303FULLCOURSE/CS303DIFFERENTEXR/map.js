"use strict";
/*eslint-disable*/
/**
 * let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
  alert(lengths); // 5,7,6
   //modify so that it alerts index: item.length instead of just item.length
 */
let length = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(length); // 5,7,6
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(
    function (item, index) {
        const newItem = "" + index + ": " + item.length;
        return newItem;
    });
console.log(lengths);
/**
 * sorting descending or asscending
 */
function compareNumber(a, b) {
    if (a > b)
        return 1;
    if (a === b)
        return 0;
    if (a < b)
        return -1;
}
function decreasingNumberlex(a, b) {
    // a = "" + b;
    // b = "" + a;
    if (a < b)
        return 1;
    if (a === b)
        return 0;
    if (a > b)
        return -1;
}
let arr = [1, 15, 2];
arr.sort(compareNumber);
console.log(arr);
let arr1 = [1, 15, 2];
arr.sort(decreasingNumberlex);
console.log(arr);
/**
 * reduce the array
 */
let num = [1, 2, 3, 4, 5];
let result = num.reduce(function (sum, current) { return sum + current; }, 0);
let result2 = num.reduce((sum, current) => sum + current, 0);
console.log(result); // 15
console.log(result2); // 15
//find multiply all element
let result1 = num.reduce(function (sum, current) { return sum * current; }, 1);
let result3 = num.reduce((sum, current) => sum + current, 0);
console.log(result1); // 120
console.log(result2);
//find max
let resultMax = num.reduce(function (max, current) { return Math.max(max, current); }, -10000000);
console.log(resultMax); //5




