"use strict";
/*eslint-disable*/
const assert = require("assert");
describe("find the double", function () {
    const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
    assert.strictEqual(doubleNums(numArray), [10, 0, 14, 154, -40, 600, 102, 4]);
});