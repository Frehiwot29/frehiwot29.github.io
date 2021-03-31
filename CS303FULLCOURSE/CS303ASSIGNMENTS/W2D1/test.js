"use strict";
/*eslint-disable*/
describe("My own map", function () {
    beforeEach(function () {
        array = [1, 2, 3, 4, 5];
    });

    it("doubles an array of numbers", function () {
        function arrTimesthree(arr) {
            let result = [];
            for (let values of arr) {
                result.push(values * 3);
            }
            return result;
        }
        assert.deepEqual(myMap(array, arrTimesthree), [3, 6, 9, 12, 15]);
        assert.deepEqual(array, [1, 2, 3, 4, 5]);  //test for pure function
    });
});

// it("To Filter the even on", function () {
    //     function filterNum(arr) {
    //         let result = []
    //         for (let n of arr) {
    //             if (n % 2 === 0) {
    //                 result.push(n)
    //             }
    //         }
    //         return result;
    //     }
    //     assert.deepEqual(myFilter(num1, filterNum), [2, 4, 6]);
    //     assert.deepEqual(num1, [1, 2, 3, 4, 5, 6]);
    // });
    // it("To Reduce the number on", function () {
    //     function sumUp(arr) {
    //         let sum = 0;
    //         for (let n of arr) {
    //             sum += n
    //         }
    //         return sum;
    //     }
    //     assert.deepEqual(myReduce(num1, sumUp), 21);
    //     assert.deepEqual(num1, [1, 2, 3, 4, 5, 6]);
    // });

