"use strict";
/*eslint-disable*/
/**
 * @author 
 * @param {arr} arr;
 * @returns {number} finding the minimum distance;
 */
function findMinDistance(arr) {
    let minDistance = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            let minDis = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]);
            if ( minDistance === -1) {
                minDistance = minDis;
            } else if (minDistance > minDis) {
                minDistance = minDis;
            }
        }
    }
    return minDistance;
}
let arr = [3, 2, 1, 2, 3];//2
let arr1 = [7, 1, 3, 4, 1, 7];//3
let arr2 = [1, 2, 3, 4] //-1
console.log(findMinDistance(arr))
console.log(findMinDistance(arr1))
console.log(findMinDistance(arr2))