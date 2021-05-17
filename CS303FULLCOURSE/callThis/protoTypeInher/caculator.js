"use strict";
/*eslint-disable*/
function Calculator(n1, n2) {
    this.num1 = n1;
    this.num2 = n2;
}
Calculator.prototype.add = function () {
    return this.num1 + this.num2;
}
Calculator.prototype.sub = function () {
    return this.num1 - this.num2;
}
Calculator.prototype.mul = function () {
    return this.num1 * this.num2;
}
Calculator.prototype.divi = function () {
    return this.num1 / this.num2;
}
const calcu = new Calculator(2, 5);
console.log(calcu.add());
console.log(calcu.sub());
console.log(calcu.mul());
console.log(calcu.divi());