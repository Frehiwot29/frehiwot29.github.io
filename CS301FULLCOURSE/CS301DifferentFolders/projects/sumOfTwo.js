"use strict";
/**
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target. 
You may assume that each input would have exactly one solution, and you may not use the 
same element twice. You can return the answer in any order.
Input                                 Output
nums =[2,7,11,15],target =9           [0,1], because nums[0]+nums[1]==9
nums = [2,3,4],  target = 6           [0,2]
nums=[3,3],target = 6                 [0,1]
 * @param {Array} nums to
 * @param {Number} target to
 * @return {number}  of index of the 
 */
function sumTwo(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result = [i, j];
            }
        }
    }
    return result;

}
let arr = [0, 2, 3, 4, 5, 6];
let targ = 6;
console.log(sumTwo(arr, targ));