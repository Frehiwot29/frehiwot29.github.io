"use strict";
/**
 * 
 * @param {number } num to compare
 * @return {number} number digiting
 */
function countDigit(num) {
/**
 * num=Math.abs(num)
 * if(num<=9){
 * return 1;
 * }else{
 *  return 1 + countDigit(Math.floor(num / 10));
 * }
 */
    if (num === 0) {
        return 0;

    } else if (num === 1) {

        return 1;
    } else {
        return 1 + countDigit(Math.floor(num / 10));
    }
}
console.log(countDigit(62663));