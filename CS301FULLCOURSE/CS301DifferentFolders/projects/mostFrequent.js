"use strict";
/**
 * 3. Write a function named mostFrequent() that given an array, finds the most frequent element 
in it. If there are multiple elements that appear maximum number of times, returns any one of 
them.
#most_frequent

 * @param {Array} arr to 
 * @return {Array} the most frequent
 */
function mostFrequent(arr) {
    let most = 1;
    let dupl = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            dupl++;
            if (most > dupl)
                most = dupl;
        }
    }
    return dupl;
}
let array = [1, 2, 3, 4, 1, 3, 3, 3, 3];
console.log(mostFrequent(array));