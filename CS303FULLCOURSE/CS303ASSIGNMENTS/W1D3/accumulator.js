"use strict";
const prompt = require("prompt-sync")();
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

