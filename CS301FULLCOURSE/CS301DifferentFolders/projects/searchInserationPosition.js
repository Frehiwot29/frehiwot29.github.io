"use strict";
/**
 * . Given a sorted array and a target value, return the index if the target is found.
 *  If not, return the index where it would be if it were inserted in order.
      You may assume no duplicates in the array.   #search_insert_position
      Input                         Output
     [1,3,5,6], 5                       2
     [1,3,5,6], 2                       1
     [1,3,5,6], 7                       4
     [1,3,5,6], 0                       0
 * @param {Array} arr which is sorted
   @param {number}  target number
 * @return {number} inserted number
 */
function searchInsertionFun(arr, target) {
    let arr1 = arr.sort((num1, num2) => num1 - num2);
    let result;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === target) {
            result = i;
        }
        if (arr1[i] < target && arr1[i + 1] > target) {
            result = i + 1;
        }
        if (target < arr1[0]) {
            result = 0;
        } else {
            if (target > arr1[arr1.length - 1]) {
                result = arr1.length;
            }
        }
    }
    return result;
}
//let num = [1, 3, 6];
let num1 = [1, 3, 5, 6, 7, 9];
//   let tar = 5;                       
//      [1,3,5,6], 2                       
//      [1,3,5,6], 7                       
//      [1,3,5,6], 0 
let num2 = 8;

console.log(searchInsertionFun(num1, num2));