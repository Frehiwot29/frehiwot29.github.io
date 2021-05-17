"use strict";
/*eslint-disable*/
function bRSearch(l, h, key) {
    if (l === h) {
        if (A[l] === key) {
            return l;
        } else {
            return 0;
        }

    } else {
        let mid = Math.floor(l + h) / 2
        if (key === A[mid])
            return mid
        if (key < A[mid])
            return bRSearch(l, mid - 1, key)
        else
            return bRSearch(mid + 1, h, key)
    }
}
let A = [1, 2, 3, 4, 56, 7, 8, 9, 87]
console.log(bRSearch(A));