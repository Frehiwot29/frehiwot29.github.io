"use strict";
/*eslint-disable*/
/**
 * 
 * @param {Number} n1 nu
 * @param {Number} n2 nu
 * @returns {Number} num
 */
function Calculator(n1, n2) {
    this.num1 = n1;
    this.num2 = n2;
}
Calculator.prototype.add = function () {
    return this.num1 + this.num2;
};
Calculator.prototype.sub = function () {
    return this.num1 - this.num2;
};
Calculator.prototype.mul = function () {
    return this.num1 * this.num2;
};
Calculator.prototype.divi = function () {
    return this.num1 / this.num2;
};
const calcu = new Calculator(2, 5);
calcu.add();
calcu.sub();
calcu.mul();
calcu.divi();