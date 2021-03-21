"use strict";
/*eslint-disable*/
function minOf(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }
    return min;
}
function sumof(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function computedCharege(arr) {
    let compute = [];
    for (let i = 0; i < arr.length; i++) {
        let computEach = [];
        let min = minOf(arr[i]);
        let sume = sumof(arr[i]);
        computEach.push(min);
        computEach.push(sume);
        compute.push(computEach);
    }
    return compute;
}
let charge = [[1, 2, 3, 4, 5], [10, 20, 30, 60], [300, 200, 100]]
console.log(computedCharege(charge));