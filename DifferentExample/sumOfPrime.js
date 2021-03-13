"use strict";
/**
 * Write a function that given an array of integers returns the
 *  sum of elements at the prime indices. For e.g. for an array [1,5,6,7,8,3] 
 * result would be a sum of 6+7+3=16 which are values at the prime indices of 
 * the array.
 * @param {Array} arr t
 * @return {number} to 
 */
function sumPimeIndex(arr){
    let sumprimIndic=0;
    for(let i=0;i<arr.length;i++){
        if(isPrime(i) ){
            sumprimIndic+=arr[i];
        }
    }
    return sumprimIndic;
}
/**
 * 
 * @param {Array} num to
 * @return {number} numbr
 */
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i !== 0) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(sumPimeIndex([1,2,3,4,5]));