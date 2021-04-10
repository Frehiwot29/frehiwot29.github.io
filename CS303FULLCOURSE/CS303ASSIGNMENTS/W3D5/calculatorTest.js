"use strict";
/*eslint-disable*/
describe("Calculator", function () {
    beforeEach(function Calculator(n1, n2) {
        this.num1 = n1;
        this.num2 = n2;
    });
    it("add two numbers", function () {
        const calcu = new Calculator(5, 10);
        assert.strictEqual(calcu.add, 15);
    });
    it("sub two numbers", function () {
        const calcu = new Calculator(5, 10);
        assert.strictEqual(calcu.sub, -5);
    });
    it("mul two numbers", function () {
        const calcu = new Calculator(5, 10);
        assert.strictEqual(calcu.mul, 50);
    });
    it("divi two numbers", function () {
        const calcu = new Calculator(50, 10);
        assert.strictEqual(calcu.divi, 5);
    });
});

