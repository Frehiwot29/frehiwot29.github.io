"use strict";
/*eslint-disable*/
function biSearch(arr, n, key) {
    let l = 1;
    let h = n;
    let mid;
    while (l <= h) {
        mid = Math.floor(l + h) / 2;
        if (key === arr[mid])
            return mid;

        if (key < arr[mid])
            h = mid - 1;
        else
            l = mid + 1;


    }
    return 0;

}
let arr = [3, 6, 12, 14, 17, 25, 29, 31, 36, 42, 47, 53, 55, 62]
console.log(biSearch(arr, 15, 29));
