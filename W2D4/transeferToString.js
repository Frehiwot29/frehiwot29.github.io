"use strict";
/**
 * 
 * @param {array} arr to transfer
 * @return {array} arr arrangeed array 
 */
function tranferToString(arr) {

    let str = arr.join();

    str = arr.join("_").toString();
    return str;
}
let arr1 = ["Quick", "Brown", "Fox"];
console.log(tranferToString(arr1));
