"use strict";
/*eslint-disable*/
function max(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}
function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length;
}
function compteCharges(arr) {
    let compute = [];
    for (let i = 0; i < arr.length; i++) {
        let eachValue = [];//[30,60]
        let avg = average(arr[i])
        let max1 = max(arr[i]);
        eachValue.push(avg)
        eachValue.push(max1)
        compute.push(eachValue)
    }
    return compute;
}
let charge = [[1, 2, 3, 4, 5], [10, 20, 30, 60], [300, 200, 100]]
console.log(compteCharges(charge));