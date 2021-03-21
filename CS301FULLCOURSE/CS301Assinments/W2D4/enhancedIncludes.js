"use strict";
/*eslint-disable*/
/**
 * . Write a JavaScript function named enhancedIncludes that takes two parameters, 
 *   an array, and a 
     value to search in the array and return an array result with three values. 
      a. First value is boolean representing if the search value exists in the array.
      b. Second value is the first index of value found in the array or -1
      c. Third value is the last index of value found in the array or -1.
 * @param {Array} arr 
 * @param {number} searchValue 
 */
function enhancedIncludes(arr, searchValue) {
    let resultSearch = [];
    resultSearch[0] = arr.includes(searchValue);
    resultSearch[1] = arr.indexOf(searchValue);
    resultSearch[2] = arr.lastIndexOf(searchValue);
    return resultSearch;
}
console.log(enhancedIncludes([1, 2, 1, 1, 2, 3, 4], 1));