"use strict";
/*eslint-disable*/
function sumof(arr) {
    let sum = 0;
    let avarge = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        avarge = Math.floor(sum / arr.length)
    }
    return avarge;
}
function maxOf(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
function computeCharged(arr) {
    let computCharge = [];
    for (let i = 0; i < arr.length; i++) {
        let eachCharge = [];
        let min = maxOf(arr[i]);
        let ave = sumof(arr[i]);
        eachCharge.push(ave);
        eachCharge.push(min);
        computCharge.push(eachCharge);

    }
    return computCharge;
}
let num = [[1, 2, 3, 4, 5], [10, 20, 30, 60], [300, 200, 100]];
console.log(computeCharged(num));