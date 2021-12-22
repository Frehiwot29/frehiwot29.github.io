"use strict";
/**
 * 
 * @param {array} arr to compare
 * @return {array} arr
 */
function reenvers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;

    }
    return arr;

}

let words = ["Cat", "Hello", "Appil", "Dog"];
console.log(reenvers(words));
