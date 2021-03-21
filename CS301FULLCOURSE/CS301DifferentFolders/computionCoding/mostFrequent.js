"use strict";
/*eslint-disable*/
function mostFrquent(arr) {
    let most = arr[0];
    let dupl = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1])
            dupl++;
        if (most < dupl)
            dupl = most;

    }
    return most;
}
console.log(mostFrquent([1, 1, 2, 2, 3]))
console.log(mostFrquent([2, 2, 2, 4, 5, 5, 6, 6, 7]));