"use strict";
/*eslint-disable*/
/** An array is called a perfectly odd array if every element at the odd indices 
   of the array is also odd. Write a function named isPerfectlyOdd that takes an 
   array of integers as a parameter and checks whether it is perfectly odd.
   Return false if the array is an empty array.
   
Input                                                Output
[]                                                   false
[2,3,4,5,7,8]                                        false 
[3,9,9,5,5,7,9]                                      true
[0,1,2,3,4,5,6,7]                                    true
   */
function isPerfectlyOdd(arr) {
    if (arr.length === 0) return false;
    for (let i = 1; i < arr.length; i += 2) {
        if (arr[i] % 2 === 0) {
            return false;
        }
    }
    return true;
}
let num = [];
let num1 = [2, 3, 4, 5, 7, 8];
let num2 = [3, 9, 9, 5, 5, 7, 9];
let num3 = [0, 1, 2, 3, 4, 5, 6, 7]
console.log(isPerfectlyOdd(num));
console.log(isPerfectlyOdd(num1));
console.log(isPerfectlyOdd(num2));
console.log(isPerfectlyOdd(num3));