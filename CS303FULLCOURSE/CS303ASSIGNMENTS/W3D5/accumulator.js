"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { Accumulator }; //add all of your function names here that you need for the node mocha tests
/**
 * 
 * @param {number} initialValue is starting value
 * @param {number} increament is amount added each call to accumulate
 * @returns {Accumulator} constructor function
 */
function Accumulator(initialValue, increament) {
    this.currenValue = initialValue;
    this.increament = increament;
    this.read = function () {
        this.currenValue = this.currenValue + this.increament;
        return this.currenValue;
    };
    this.report = function () {
        return this.currenValue;
    };
}
let accumulator = new Accumulator(2, 6);
let accumulator1 = new Accumulator(2, 6);
console.log(accumulator.read());
console.log(accumulator1.read());
