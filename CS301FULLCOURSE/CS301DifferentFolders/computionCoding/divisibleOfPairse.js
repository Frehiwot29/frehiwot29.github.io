"use strict";
/*eslint-disable*/
/**
 * Write a function divisibleSumPairs that takes an array of integers and a positive integer k, 
determines the number of (i,j) pairs where i<j and arr[i]+arr[j] is divisible by k.
Example:
Input                 Output                                  Explanation
                                                        ar = [1,2,3,4,5,6]k= 5
3 Three indices' pairs meet the criteria: (0,3), (1,2), and (3,5), 
hence the result is 3.
ar = [1, 3, 2, 6, 1, 2]
k=3
5 Five indices' pairs meet the criteria: (0,2), (0,5), (1,3), (2,4) and 
(4,5), hence the result is 5
 * @param {*} arr 
 * @param {*} k 
 * @returns 
 */
function divisibleSumpairs(arr, k) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (i < j) {
                sum = arr[i] + arr[j];
                if (sum % k === 0) {
                    count++;
                }
            }

        }
    }
    return count;
}
let num = [1, 2, 3, 4, 5, 6];

let k = 5;
console.log(divisibleSumpairs(num, k));
console.log(divisibleSumpairs([1, 3, 2, 6, 1, 2], 3
));
