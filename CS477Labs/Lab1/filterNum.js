/**
 * Write the necessary Node script to make this code work for all arrays: 
 * [1,2,3,4,5,6,7,8].even(); // [2,4,6,8] 
 * [1,2,3,4,5,6,7,8].odd(); // [1,3,5,7] Test your code in Node.JS CLI
 */
//[1,2,3,4,5,6,7,8].even(); // [2,4,6,8] 
function filterEven(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;

}
let myNum = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filterEven(myNum));

//[1,2,3,4,5,6,7,8].odd(); // [1,3,5,7]
function filterOdd(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
let myNum1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filterOdd(myNum1));