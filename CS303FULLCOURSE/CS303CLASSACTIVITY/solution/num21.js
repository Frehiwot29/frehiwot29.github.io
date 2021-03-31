"use strict";
/*eslint-disable*/
const assert = require("assert");
function mult(x, y, z) {return x * y * z};

describe("Test of x +y+z",function(){
    it("the product of the 3 number must be ",function(){
        assert.deepEqual(mult(3,1,2),6)
    })
})