"use strict";
/*eslint-disable*/
function heapSort(arr) {
    buildHeap(arr)
    let end = arr.length - 1;
    while (end > 0) {
        swapElements(arr, 0, end);
        end = end - 1;
        downHeap(arr, 0, end);
    }
}
function buildHeap(arr) {
    let last = arr.length - 1;
    let next = last;
    while (next > 0) {
        downHeap(arr, last, parent(next));
        next = next - 2;
    }
    return next;
}
function parent(i) {
    return Math.floor((i - 1) / 2);
}
function downHeap(H, last, i) {
    let property = false;
    while (!property) {
        let maxIndex = indexOfMax(H, i, last);
        if (maxIndex !== i) {
            swapElements(H, maxIndex, i);
            i = maxIndex;
        } else {
            property = true;
        }
    }
    return property;
}
function swapElements(H, j, k) {
    let temp = H[j]
    H[j] = H[k]
    H[k] = temp;
}
function indexOfMax(A, r, last) {
    let largest = r;
    let left = 2 * r + 1;
    let right = left + 1;
    if (left <= last && A[left] > A[largest]) {
        largest = left;
    }
    if (right <= last && A[right] > A[largest]) {
        largest = right;
    }
    return largest;
}

let arr = [2, 3, 4, 5, 6, 7];
console.log(heapSort(arr));