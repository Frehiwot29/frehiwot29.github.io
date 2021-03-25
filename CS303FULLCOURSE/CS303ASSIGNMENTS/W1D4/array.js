"use strict";
/*eslint-disable*/
/**
 * Can I add a string property?
 * Depending on whether you have use strict or not, the result may be:
       1.undefined (no strict mode)
       2. An error (strict mode).
 * 
 */
let str = "Hello";
str.test = 5;
console.log(str.test);
/**
 * Create a script that prompts the visitor to enter two numbers and then shows their sum.
 */
const prompt = require("prompt-sync")();
let num1 = +prompt("The first number?", "");
let num2 = +prompt("The second number?", "");

console.log(num1 + num2);

/**
 * Create a function readNumber which prompts for a number until the visitor enters 
 * a valid numeric value.The resulting value must be returned as a number.
  The visitor can also stop the process by entering an empty line or pressing “CANCEL”. 
  In that case, the function should return null.
 */
function readNumber() {
    let num;
    do {
        num = +prompt("please Enter a number: ", 0);

    } while (!isFinite(num));
    if (num === null || num === "")
        return null;
    return +num;
}
console.log(`read: ${readNumber()}`);

/**
 * This loop is infinite. It never ends. Why?
 */
let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2)
        console.log(i);
}

/**
 * A random number from min to max
 * The built-in function Math.random() creates a random value from 0 to 1 (not including 1).
   Write the function random(min, max) to generate a random floating-point number 
   from min to max (not including max).
 */
function random(min, max) {
    return min + Math.random() * (max - min);
}
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

/**
 * Create a function randomInteger(min, max) that generates a random integer
 * number from min to max including both min and max as possible values.
 * Any number from the interval min..max must appear with the same probability.
 */
function randomInteger(min, max) {
    let random = min - 0.5 + Math.random() * (max - min);
    return Math.round(random);
}
console.log(randomInteger(1, 3));
console.log(randomInteger(1, 3));
console.log(randomInteger(1, 3));
/**
 * Write a function ucFirst(str) that returns the string str with the uppercased first character, 
 * for instance:
 * We can’t “replace” the first character, because strings in JavaScript are immutable.
   But we can make a new string based on the existing one, with the uppercased first character:
 */
function ucFirst(str) {
    if (!str) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1);

}
console.log(ucFirst("john"));
console.log(ucFirst("Ann"));
console.log(ucFirst("Abram"));

/**
 * Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, 
 * otherwise false.The function must be case-insensitive:
 */
function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

/**
 * Create a function truncate(str, maxlength) that checks the length of the str and, 
 * if it exceeds maxlength – replaces the end of str with the ellipsis character "…", 
 * to make its length equal to maxlength.
  The result of the function should be the truncated (if needed) string.
 */

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));
console.log(truncate("Hi everyone!", 20));

/**
 * We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
 Create a function extractCurrencyValue(str) that would extract the numeric value from such 
 string and return it.
 */
function extractCurrencyValue(str) {
    return +str.slice(1);
}
console.log(extractCurrencyValue('$120') === 120);
console.log(extractCurrencyValue('$120') === 120);
console.log(extractCurrencyValue('$120') === 120);
/**
 * What is this code going to show?
 */
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
console.log(fruits.length);

/**
 * Let’s try 5 array operations.
Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.Replace the value in the middle by “Classics”.
Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.Prepend Rap and Reggae to the array.
 */
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
/**
 * What is the result? Why?
 */
let arr = ["a", "b"];

arr.push(function () {
    console.log(this);
})

arr[2]();
/**
 * Write the function sumInput() that:
Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.
 */
function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("A number please?", 0);
        // should we cancel?
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(sumInput());
/**
 * The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
The task is: find the contiguous subarray of arr with the maximal sum of items.
Write the function getMaxSubSum(arr) that will return that sum.
 */
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
    for (let item of arr) { // for each item of arr
        partialSum += item; // add it to partialSum
        maxSum = Math.max(maxSum, partialSum); // remember the maximum
        if (partialSum < 0) partialSum = 0; // zero if negative
    }
    return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // 0

/**
 * Write the function camelize(str) that changes dash-separated words like “my-short-string” 
 * into camel-cased “myShortString”.That is: removes all dashes, each word after dash becomes uppercased.
 */
function camelize(str) {
    return str
        .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
        .map(
            // capitalizes first letters of all array items except the first one
            // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');



