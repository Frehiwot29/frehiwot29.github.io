"use strict";
/*eslint-disable*/
/**
 *  * @returns {Calculator} constructor function
 */
function Calculator() {
    /**
     * 
     * @returns{Number} sum;
     */
    this.sum = function () {
        return this.num1 + this.num2;
    };
    /**
     * 
     * @returns {Number} multiplication;
     */
    this.mul = function () {
        return this.num1 * this.num2;
    }
    /**
     * 
     * @returns {Number} subtraction;
     */
    this.sub = function () {
        return this.num1 - this.num2
    }
    /**
     * 
     * @returns {Number} division;
     */
    this.div = function () {
        return this.num1 / this.num2;
    }
};
//second option
function calculator(num3, num4, calcType) {
    let result = 0;
    if (calcType === "add") {
        result = num3 + num4;
    } else if (calcType === "sub") {
        result = num3 - num4;
    } else if (calcType === "multi") {
        result = num3 * num4;
    } else if (calcType === "div") {
        result = Math.floor(num3 / num4);

    }
    return result;

}
console.log(calculator(3, 4, add));
