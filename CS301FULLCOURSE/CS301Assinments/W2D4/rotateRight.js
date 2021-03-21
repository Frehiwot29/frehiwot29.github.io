"use strict";
/**
 * Write a function to rotate the elements in an array to the right by 1.
 * @param {array} arr to ratate
 * @return {array} array 
 */
function rotate(arr) {
  let right = arr.shift();
  arr.push(right);
  return arr;

}
let num = [1, 2, 3, 4, 5];
console.log(rotate(num));
