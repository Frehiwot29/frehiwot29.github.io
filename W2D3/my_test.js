"use strict";

// const { assert } = require("assert");
// const fun = require("./areaOfCircle.js");
// describe("areaOfCircle", function () {

//     it("calculate area of circle", function () {
//         assert.strictEqual(fun.areacircle(3), 28.274333882308138);
//     });
// });

const assert = require("assert");
const myFunctions = require("./areaOfCircle.js");

describe("checArea", function () {
    it("area", function () {
        assert.strictEqual(myFunctions.volumeCylinder(3, 5), 235.61944901923448);
    });
    it("area", function () {
        assert.strictEqual(myFunctions.volumeCylinder(4, 5), 314.1592653589793);
    });
});