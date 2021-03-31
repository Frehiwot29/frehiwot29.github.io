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
function compareDiceasingNumber(a, b) {
    if (a > b)
        return -1;
    if (a === b)
        return 0;
    if (a < b)
        return 1;
}
function decreasingNumberlex(a, b) {
    a = "" + a;
    b = "" + b;
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
console.log("expect [2,15,1]: ", arr);
arr.sort(compareDiceasingNumber);
console.log("expect [15,2,1]: ", arr);
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

/**
 * To use our own sorting order, we need to supply a function as the argument of arr.sort().
 */
function compareNumbersLex(a, b) {
    return a - b;
}
let array = [1, 15, 2];
let num2 = array.sort(compareNumbersLex);
console.log(num2);
/**
 * let arr=[1,2,7];
arr.sort(function(a,b){return b-a});
console.log(arr);
 */
/**
 * ➢ reduce the array to the product of the numbers (“expect 120”)
➢ reduce the array to the max of the numbers (“expect 5”)
let arr = [1, 2, 3, 4, 5];
 */
let arr4 = [1, 2, 3, 4, 5];
let nurrr=arr4.reduce((pro,item)=>pro*item,1);
console.log(nurrr);




