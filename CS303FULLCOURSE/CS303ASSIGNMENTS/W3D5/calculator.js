"use strict";
/**
 * @return {number} num
 */
 function Calculator() {
    this.methods = {
      "-": (num1, num2) => num1 - num2,
      "+": (num1, num2) => num1 + num2
    };
    this.calculate = function (str) {
      let split = str.split(" "),
        num1 = +split[0],
        oop = split[1],
        num2 = +split[2];
      if (!this.methods[oop] || isNaN(num1) || isNaN(num2)) {
        return NaN;
      }
      return this.methods[oop](num1, num2);
    };
    this.addMethod = function (name, func) {
      this.methods[name] = func;
    };
  }
  let calc = new Calculator;
  //alert( calc.calculate("3 + 7") ); // 
  console.log(calc.calculate("3 + 7"));//10