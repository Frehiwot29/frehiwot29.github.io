"use strict";
/**
 * Write a function, isArrayEqual, that returns true if two arrays have === elements, else returns false.
 * @param {array} arr1 to check weather equal 
 * @param {array} arr2 to check weather they are equal
 * @return {boolean} checking weather true or false
 */
function isArrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }

    }
    return true;


}
let myArr1 = [1, 2, 3, 4];
let myArr2 = [1, 2, 3, 4];
console.log(isArrayEqual(myArr1, myArr2));
/**
 * Write a function named getMiddle that returns the value of the middle element in an array. If
    the array has an even number of elements, then this function must return the average of the two middle elements.
 * @param {array} arr to check the middle
 * @return {array} arr to check the middle
 */
function getMiddle(arr) {
    let middle = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr.length) % 2 !== 0) {
            middle = arr[Math.floor(arr.length / 2)];
            // (arr[middle] + arr[middle - 1]) / 2;
        } else {
            middle = (arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2;
            //middle=arr[Math.random((arr.length - 1) / 2)];
        }
    }
    return middle;
}
let array = [1, 2, 3, 4, 5, 6, 8];
console.log(getMiddle(array));

/**
 * 
 * @param {array} arr to add
 * @returns {arr} result of addition of first and last elements of the array 
 */
function addends(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = arr[0] + arr[arr.length - 1];

    }
    return sum;

}
let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(addends(arr1));
/**
 * Write a function to rotate the elements in an array to the right by 1.
 * @param {array} arr to ratate
 * @return {array} array 
 */
function rotateRigth(arr) {
    let right = arr.shift();
    arr.push(right);
    return arr;

}
let num = [1, 2, 3, 4, 5];
console.log(rotateRigth(num));
/**
 * 
 * @param {array} arr to rotat
 * @return {array} arr  
 */
function rotateLeft(arr) {

    let left = arr.pop();
    arr.unshift(left);
    return arr;

}
let num1 = [23, 34, 45, 67];
console.log(rotateLeft(num1));
/**
 * 
 * @param {array} arr  rotate array 
 * @param {number} num to rotate n times
 * @return {array} arr is result
 */
function rotateNRight(arr, num = 1) {
    return [...arr.slice(num, arr.length), ...arr.slice(0, num)];

}
let arr = [1, 2, 3, 4, 5];
console.log(rotateNRight(arr, 1));
console.log(rotateNRight(arr, 2));
console.log(rotateNRight(arr, 3));
console.log(rotateNRight(arr, 4));
console.log(rotateNRight(arr, 5));
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
let arr2 = ["Quick", "Brown", "Fox"];
console.log(tranferToString(arr2));

/**
 * @param {String} balanced to check weather balance or not
 * @return {boolean} true or false 
*/
function balance(balanced) {
    const newArray = [];
    for (const element of balanced) {
        if (element === "(" || element === "[" || element === "{") {
            balanced.pop(element);
            newArray.push(element);
        }
    }
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] !== balanced[i]) {
            return false;
        }
    }
    return true;
}
const balanced = ["(", ")", "(", "[", "{", "}", "]", ")"];
console.log(balance(balanced));

/**
 * @param {array} array to check paliondrom
 * @return {boolean} true or false 
*/
const myArry = ["carecar", 1344, 12321, "did", "cannot"];
const isPalindrome = elll => {
    const str = String(elll);
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] === str[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
};
const findPalindrome = myArry => {
    return myArry.filter(elll => isPalindrome(elll));
};
console.log(findPalindrome(myArry));

/**
 * 
 * @param {Array} matr1 to 
 * @param {Array} matr2 to
 * @return {Array} sumMatrics 
 */
function matricsAdd(matr1, matr2) {
    let sumMatrics = [[], []];
    for (let i = 0; i < matr1.length; i++) {
        for (let j = 0; j < matr2[i].length; j++) {
            sumMatrics[i][j] = matr1[j][j] + matr2[i][j];


        }

    }
    return sumMatrics;


}
let martics1 = [[1, 2, 3], [3, 4, 5]];
let martics2 = [[2, 4, 5], [4, 5, 6]];
console.log(matricsAdd(martics1, martics2));
/**
 * @param {array} arr to reverse
 * @return {array} the reversed one
*/
function reverse(arr) {
    let temp = [];
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        temp[j] = arr[i];
        j++;
    }
    return temp;
}
let input = [1, 2, 3, 4, 5];
console.log(reverse(input));



module.exports = {
    isArrayEqual, addends, getMiddle, rotateRigth,
    rotateLeft, rotateNRight, balance, isPalindrome, matricsAdd, reverse
};