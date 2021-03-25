"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests



/**
 * @returns {number} unmber of sum and mul;tiple
 */
function Calculator() {
    this.getValues = function (oprend1, oprend2) {
        this.value1 = oprend1;
        this.value2 = oprend2;
    },
        this.sum = function () {
            return this.value1 + this.value2;

        },
        this.multi = function () {
            return this.value1 * this.value2;

        };
}
let calculator = new Calculator();
calculator.getValues(16, 6);

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.multi());


/**
 * @param {number} initialValue to
 * @param {number}increament to injiih
 * @return {number} number
 */
function Accumulator(initialValue, increament) {
    this.currenValue = initialValue;
    this.read = function () {
        this.increamented = increament;
        return this.increamented;
    };
}
let accumulator = new Accumulator(2, 6);
console.log(accumulator.currenValue);
accumulator.read();
//accumulator.read();
console.log(accumulator.increamented);
