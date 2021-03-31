"use strict";
/*eslint-disable*/
/**
 * 
 * @param {Array} arr for
 * @param {Object} fun to 
 * @return{array} the filter one
 */
function myFilter(arr) {
    return arr.filter(item => item % 2 === 0);
}
let number = [4, 5, 6, 7, 8, 9];
console.log(myFilter(number));

/**
 * 
 * @param {Array} arr to
 * @return {number} num
 */
function myReduce(arr) {
    return arr.reduce((item, index) => item * index, 1);
}
let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(myReduce(array));
/**
 * Q1.. Write your own version of Array.map. Write a function, myMap(arr, fun) that takes an array and 
a   function as arguments and returns a new array that is formed by applying the function to each 
   element of the array and saving the result in the new array. Do not use the Array.map method in 
   your code.
 * Q2.3. Do the same for Array.filter and Array.reduce.

 */
   function myMap(arr, fun) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let myFun = fun(arr[i], i);
        if (myFun) {
            newArray.push(arr[i]);
        }

    }
    return result;
}
// myMap(arr,fun(value,index){
//     return value*index;
// }
// );
