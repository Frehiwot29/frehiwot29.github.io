"use strict";
/*eslint-disable*/

describe("Recurssion sum factorial and fib", function () {
    it("sum of All", function () {
        assert.deepEqual(sumOfAll(10), 55);
    });
    it("factorial of number", function () {
        assert.deepEqual(fiactorialCalc(5), 120);
    });
    it("fibonacci of number", function () {
        assert.deepEqual(fibonacciNum(7), 13);
    });
});