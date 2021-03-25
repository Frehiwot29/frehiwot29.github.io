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
