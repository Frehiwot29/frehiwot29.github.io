"use strict";
/*eslint-disable*/
const prompt = require("prompt-sync")();
/**
 * @returns {number} unmber of sum and mul;tiple
 */
function Calculator() {
    this.getValues = function (oprend1, oprend2) {
        this.value1 = oprend1;
        this.value2 = oprend2;
    }
    this.sum = function () {
        return this.value1 + this.value2;
    }
    this.multi = function () {
        return this.value1 * this.value2;
    };
}
let calculator = new Calculator();
calculator.getValues(16, 6);
console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.multi());