"use strict";
const arr = [1, 2, 3, 4, 5];
/**
 * 
 * @param {Array} arr to be processed
 * @param {*} cbk to map the elements
 * @returns {Array} of mapped elements
 * make the new array
 * loop through arr
 * call cbk(each element) and get return value and push it into new array
 * return the result new array
 * 
 */
function myMap(arr, cbk) {
    //IMPLEMENTATION NEEDED
    /**
     * const newArray=[]
     * for(const element of arr){
     * newArray.push(cbk(element))
     * }
     * return newArray;
     */
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let result = cbk(arr[i]);
        newArr.push(result);
    }
    return newArr;
}
const dblFun = num => num * 2;
const squareFun = num => num * num;
console.log("expect [2, 4, 6,8,10] ", arr.map(dblFun));
console.log("expect [2, 4, 6,8,10] ", myMap(arr, dblFun));
console.log("expect [1,4,9, 16, 25] ", arr.map(squareFun));
console.log("expect [1,4, 9,16, 25] ", myMap(arr, squareFun));

/**
 *
 * @param {Array} arr to be processed
 * @param {Function} cbk callback
 * @param {*} initialVal value for the reduction
 * @returns {*} the reduction of the array
 * go through the array, call cbk with accumulator and element
 * return value of cbk becomes accumulator for next loop
 */
function myReduce(arr, cbk, initialVal) {
    let accumulater = initialVal;
    for (const element of arr) {
        accumulater = cbk(accumulater, element);
    }
    return accumulater;
    // for (let i = 0; i < arr.length; i++) {
    //     accumulater=cbk(accumulater,)
    //     // let result = cbk(arr[i], initialVal);
    //     // return result;
    // }
}
const sumFun = (accum, val) => accum + val;
const mulFun = (accum, val) => accum * val;
console.log("expect: 15: ", arr.reduce(sumFun, 0));
console.log("expect: 15: ", myReduce(arr, sumFun, 0));
console.log("expect: 120: ", arr.reduce(mulFun, 1));
console.log("expect: 120: ", myReduce(arr, mulFun, 1));
/**
 * 
 * @param {Array} arr to filter
 * @param {Object} cbk to filter
 * @return  {Array} array of number
 */
function myFilter(arr, cbk) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let result = cbk(arr[i]);
        newArr.push(result);
    }
    return newArr;
}
const myEvenFil = num => num % 2 === 0;
const myoddFil = num => num % 2 !== 0;
console.log(myFilter(myEvenFil));
console.log(myFilter(myoddFil));

// function myMap1(arr,cbk){
//     let newArray=[];
// }