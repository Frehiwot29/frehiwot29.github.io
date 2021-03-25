"use strict";
/*eslint-disable*/
//const prompt = require("prompt-sync")();
/**
 * @param {number} initialValue to
 * @param {number}increament to injiih
 * @return {number} number
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
read();
// console.log(accumulator.currenValue);
// accumulator.read();
// //accumulator.read();
// console.log(accumulator.currenValue);
// accumulator.report();
// console.log(accumulator.report());

