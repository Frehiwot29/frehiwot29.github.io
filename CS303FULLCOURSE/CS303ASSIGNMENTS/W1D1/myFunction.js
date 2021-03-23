"use strict";
/**
 * Q1. Define a function maxOfThree() that takes three numbers as arguments and returns the 
largest of them. 
 */
/**
 * 
 * @param {number} num1 number
 * @param {number} num2 number
 * @param {number} num3 number
 * @return {number} number the max one
 */
function maxOfThree(num1, num2, num3) {
    let result = 0;
    if (num1 > num2 && num1 > num3) {
        result = num1;
    } else if (num2 > num1 && num2 > num3) {
        result = num2;
    } else if (num3 > num1 && num3 > num2) {
        result = num3;

    }
    return result;
}
console.log(maxOfThree(2, 3, 4));
console.log(maxOfThree(4, 3, 2));
console.log(maxOfThree(2, 7, 4));

/**
 * Q2. Define a function sum() and a function multiply() that sums and multiplies (respectively)
all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and
multiply([1,2,3,4]) should return 24.
 */
/**
 * 
 * @param {Array} arr to sum
 * @return {number} number to sum
 */
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum([1, 12, 3, 4]));
console.log(sum([1, 2, 9, 4]));
console.log(sum([1, 2, 8, 4]));
console.log(sum([1, 7, 3, 4]));

/**
 * 
 * @param {Array} arr to multiply
 * @return{number} number 
 */
function multiply(arr) {
    let multip = 1;
    for (let i = 0; i < arr.length; i++) {
        multip *= arr[i];

    }
    return multip;
}
console.log(multiply([8, 8, 3, 4]));
console.log(multiply([1, 2, 3, 4]));
console.log(multiply([9, 4, 3, 4]));

/**
 * Q3. Write a function findLongestWord() that takes an array of words and returns the length of 
the longest one. 
 */
/**
 * 
 * @param {Array} arr to compare//
 * @return {number} number length of the longest
 */
function findLongestWord(arr) {
    let longests = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longests) {
            longests = arr[i];
        }
    }
    return longests;
}
let num = ["AdonayF", "SimonF", "KalabF", "AsterF", "FrehiwotK"];
console.log(findLongestWord(num));

/**
 * Arrays have a reverse method that changes the array by inverting the order in which its elements
appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first,
reverseArray, takes an array as argument and produces a new array that has the same elements in
the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it
modifies the array given as argument by reversing its elements. Neither may use the standard reverse
method.
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValuue);
// → [5, 4, 3, 2, 1]
 */
/**
 * 
 * @param {Array} arr to reverse
 * @return {Array} reverse
 */
function reverseArray(arr) {
    let result = [];
    let newarray = [];
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        newarray[j] = arr[i];
        result.push(newarray[j]);
        j++;
    }
    return result;
}
let num1 = [1, 2, 3, 4, 5];
let num2 = ["A", "B", "C"];
console.log(reverseArray(num1));
console.log(reverseArray(num2));

/**
 * 
 * @param {Array} arr to find reverse inplace
 * @return {Array} reverse array
 */
function reverseArrayInPlace(arr) {
    let length = arr.length;
    let loop = Math.floor(length / 2);
    for (let i = 0; i < loop; i++) {
        let holdNum = arr[i];
        let swapPos = length - 1 - i;
        arr[i] = arr[swapPos];
        arr[swapPos] = holdNum;
    }
    return arr;
}

let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayValue));
console.log(reverseArrayInPlace(["A", "B", "C"]));

/**
 * . Write a function, scoreExams, that takes an array of arrays of student answers and an array of
the correct answers. It should compare each student’s answers against the correct answers and
return an array holding the scores of each student. The score for each student is a count of the
number of correct answers (i.e., matches with the key of correct answers). For example
const studentAnswers = [[1, 1, 2], [2, 1, 2], [3, 1, 3]];
const correctAnswers = [3, 1, 2];
scoreExams(studentAnswers, correctAnswers)); --> [2, 2, 2]
 */
/**
 * 
 * @param {Array} arr1 answer of student
 * @param {Array} arr2 correct answer
 * @return {Array} arr score exam answer 
 */
function scoreExams(arr1, arr2) {
    let correctAnswer = [];
    for (let i = 0; i < arr1.length; i++) {
        let count = 0;
        for (let j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] === arr2[j]) {
                count++;
            }
        }
        correctAnswer.push(count);
    }
    return correctAnswer;
}
const studentAnswers = [[1, 1, 2], [2, 1, 2], [3, 1, 3]];
const correctAnswers = [3, 1, 2];
console.log(scoreExams(studentAnswers, correctAnswers));

//module.exports = { maxOfThree, sum, multiply, findLongestWord, reverseArray, reverseArrayInPlace, scoreExams };
