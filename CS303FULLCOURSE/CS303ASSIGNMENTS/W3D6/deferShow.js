"use strict";
Function.prototype.defer = function (msg) {
    let fun = this;
    return function (...args) {
        setTimeout(() => fun.apply(this, args), msg);
    };
};
/**
 * 
 * @param {Number} num1 num
 * @param {Number} num2 num
 * @returns{Number} num
 */
function fun(num1, num2) {
    console.log(num1 + num2);
}

fun.defer(1000)(1, 2); // shows 3 after 1 sec