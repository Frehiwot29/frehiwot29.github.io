"use strict";
/*eslint-disable*/
/**
 * The function sayHi uses an external variable name. 
 * When the function runs, which value is it going to use?
 */
let name = "John";
function sayHi() {
    console.log("Hi, " + name);
}
name = "Pete";
sayHi(); // what will it show: "John" or "Pete"?


