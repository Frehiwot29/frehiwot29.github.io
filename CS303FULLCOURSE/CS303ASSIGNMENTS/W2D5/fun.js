"use strict";
/*eslint-disable*/
/**
 * Look at the code. What will be the result of the call at the last line?let phrase = "Hello";
 */
if (true) {
    let user = "John";
    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}
sayHi();
/**
 * The result is an error.The function sayHi is declared inside the if,
 * so it only lives inside it. There is no sayHi outside.
 */