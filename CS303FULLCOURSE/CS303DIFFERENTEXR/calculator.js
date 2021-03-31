"use strict";
/*eslint-disable*/
let calculator = {
  value1: 0,
  value2: 0,
  getValues: function (oprend1, oprend2) {
    this.value1 = oprend1;
    this.value2 = oprend2;
  },
  sum: function () {
    const tot = this.value1 + this.value2;
    return tot;
  },
  multi: function () {
    const mul = this.value1 * this.value2;
    return mul;
  }
};
calculator.getValues(16, 23);
console.log(calculator.sum());
console.log(calculator.multi());
//module.exports = { sum, multi };
/**
 * function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
 */
// const assert = require("assert");
// describe("to calculater", function () {
//   it("to sum", function () {
//     assert.strictEqual(sum(2, 3), 5);
//   });
//   it("to multiply", function () {
//     assert.strictEqual(multi(2, 3), 6);
//   })
// })