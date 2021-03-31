"use strict";
/*eslint-disable*/
/**
 * use forEach to log all  the even element of an array to the console
 * [1,5,16,3,108]
 */
/**
 const num=[1,5,16,3, 108];
function isEven(number){
   if(number%2===0){
       console.log(number)
   }
}
num.forEach(isEven)
 */
const arr = [1, 2, 5, 16, 3, 108];
function isEvenlog(number, index, array) {
    if (number % 2 === 0) {
        console.log(index, ". ", number, "from the array: ", array);
    }
}
const forE = arr.forEach(isEvenlog);
console.log("forE: ", forE);
/**
 * use filter ,find and findindex to find
 * -all the even numbers
 * -the first even number
 * -the index of the first even number
 */
const numbers = [1, 5, 18, 2, 77, 108];
function isEven(number) {
    if (number % 2 === 0) {
        return true;

    } else {
        return false;
    }
}
const filtered = numbers.filter(isEven);
const myfound = numbers.find(isEven);
console.log("filtered: ", filtered);
console.log("found is :", myfound);

/**
 * const numbers = [1, 5, 18, 2, 77, 108];
   use filter, find, and findIndex to find
  all the even numbers
  the first even number
  the index of the first even number
 */
const number = [1, 5, 18, 2, 77, 108];

function isEvenNumber(num) {
    return num.filter(item => item % 2 === 0);
}
console.log(isEvenNumber(number));

function isEvenNumber1(num) {
    return num.find(item => item % 2 === 0);
}
console.log(isEvenNumber1(number));

function isEvenNumber2(num) {
    return num.findIndex(item => item % 2 === 0);
}
console.log(isEvenNumber2(number));
/**
 * Write a function, myMap(arr, fun) that takes an array and a function as arguments and returns a new
 *  array that is formed by applying the function to each element of the array 
 * and saving the result in the new array.
 */
function myMap(arr,fun){
    let result=[];
    for(let i=0;i<arr.length;i++){
        result.push(fun(arr[i]));
    }
  return result;
}