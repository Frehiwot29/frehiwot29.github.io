"use strict";
/*eslint-disable*/
function countPairOfSock(arr) {
    arr.sort((a, b) => a - b);
    //console.log(arr);
    let countpair = 0;

    for (let i = 0; i < arr.length; i++) {
        let pair = 0;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j])
                pair++;
        }
        if (pair >= 2 && pair % 2 === 0) {
            countpair += (pair / 2);
        } else if (pair > 2 && pair % 2 !== 0) {
            pair = pair - 1;
            countpair += (pair / 2);
        }
    }
    return countpair;
}


let num = [1, 2, 1, 2, 1, 3, 2];
let num2 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(countPairOfSock(num));
console.log(countPairOfSock(num2));