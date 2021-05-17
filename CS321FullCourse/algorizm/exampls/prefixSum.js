"use strict";
/*eslint-disable*/
function prifexSum(arr) {
    let sum = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        newArr.push(sum);
    }
    return sum / arr.length;
}
console.log(prifexSum([2, 3, 4, 5]));