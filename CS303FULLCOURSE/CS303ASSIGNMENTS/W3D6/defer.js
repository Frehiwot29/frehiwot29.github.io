"use strict";
/**
 * 
 * @param {Number} msg num
 * @returns {String} str 
 */
Function.prototype.defer = function (msg) {
  setTimeout(this, msg);
};
/**
 * @returns{String} hello
 */
function fun() {
  alert("Hello!");
}
fun.defer(1000); // shows "Hello!" after 1 sec