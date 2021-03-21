"use strict";
/*eslint-disable*/
/**
 * An evenDominated array is an array that has count of even elements in the array more than the 
  odd elements. Write a function that tests if an array is even dominated.
 * @param {*} arr 
 * @returns 
 */
function evenDominated(arr) {
    let even_count = 0;
    let odd_count = 0;
    for (let i = 0; i < arr.length; i += 2) {
        even_count++;
    }
    for (let i = 1; i < arr.length; i += 2) {
        odd_count++;
    }
    return even_count === odd_count;
}
let num = [1, 2, 3, 4, 5, 6, 7, 8, 10];//false
console.log(evenDominated(num));