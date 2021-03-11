"use strict";
const assert = require("assert");
const app = require("./volumeOfHome");

describe("checkPrime", function () {
    it("7 is a prime", function () {
        assert.strictEqual(app.checkPrime(7), true);
    });

    it("9 is not a prime ", function () {
        assert.strictEqual(app.checkPrime(9), false);
    });
});

describe("triangleArea", function () {
    it("Area of triangle with sides 3,4 and 5 is 6", function () {
        assert.strictEqual(app.triangleArea(3, 4, 5), 6);
    });

    it("Area of triangle with sides 3,4 and 5 is 6", function () {
        assert.strictEqual(app.triangleArea(6, 8, 10), 24);
    });

});

// Write test specification for roofVolume
describe("Volum of the roof", function () {
    it("Volum of the roof multiplay area of triangle and width", function () {
        assert.strictEqual(app.VolumeOfRoof(24, 3), 72);

    });
    it("Volum of the roof multiplay area of triangle and width", function () {
        assert.strictEqual(app.VolumeOfRoof(36, 3), 108);

    });

});



describe("hcf", function () {
    it("HCF of 3 and 9 is 3 ", function () {
        assert.strictEqual(app.hcf(3, 9), 3);
    });

    it("HCF of 7 and 11 is 1", function () {
        assert.strictEqual(app.hcf(7, 11), 1);
    });
    it("HCF of 12 and 16 is 4", function () {
        assert.strictEqual(app.hcf(12, 16), 4);
    });
});

// Write test specification for LCM

describe("LCM ", function () {
    it("lcm of 3 and 27 is 27", function () {
        assert.strictEqual(app.LCM(27, 3), 27);
    });
    it("lcm of 3 and 27 is 27", function () {
        assert.strictEqual(app.LCM(81, 9), 81);
    });


});