"use strict";
/*eslint-disable*/
function reversAll(str) {
    let arr = str.split();
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = arr[i].length; j >= 0; j--) {
            newArr.push(arr[i][j]);
        }

    }
    return newArr.join("").toString();

}
let num = "how are you bro";
console.log(reversAll(num));