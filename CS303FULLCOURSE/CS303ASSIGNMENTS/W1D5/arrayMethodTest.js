"use strict";

//const { getAverageAge } = require("./arrayMethodsApp");

/*eslint-disable*/
/* global assert    */
/* comment out the node specific code when going to the browser*/
/*const assert = require("assert");  //always need this with node
const myExports = require("./methods.js");  //with node need the name of your file with your functions here
const groupById = myExports.groupById;  //do this for all of the functions used in the Mocha tests
const unique = myExports.unique;
const filterRangeInPlace = myExports.filterRangeInPlace;
const filterRange = myExports.filterRange;
const Calculator = myExports.Calculator;*/
/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
describe("filterRange", function () {
    it("returns the filtered values", function () {
        let arr = [5, 3, 8, 1];
        let filtered = filterRange(arr, 1, 4);
        assert.deepEqual(filtered, [3, 1]);
    });
    it("doesn't change the array", function () {
        let arr = [5, 3, 8, 1];
        let filtered = filterRange(arr, 1, 4);
        assert.deepEqual(arr, [5, 3, 8, 1]);
    });
});
// describe("filterRange", function () {
//     it("returns the filtered values", function () {
//         let arr = [5, 3, 8, 1];
//         filterRange(arr, 1, 4);
//         assert.strictEqual(filterRange(arr, 1, 4), [3, 1]);
//     });
//     it("doesn't change the array", function () {
//         let arr = [5, 3, 8, 1];
//         filterRange(arr, 1, 4);
//         assert.strictEqual(filterRange(arr, 1, 4), [3, 1]);
//     });
// });
/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/
describe("filterRangeInPlace", function () {
    it("returns the filtered values", function () {
        let arr = [5, 3, 8, 1];
        filterRangeInPlace(arr, 1, 4);
        assert.strictEqual(filterRangeInPlace(arr, [3, 1]));
    });
    it("doesn't return anything", function () {
        assert.strictEqual(filterRangeInPlace([1, 2, 3], 1, 4), undefined);
    });
});
/* 
Create a constructor function Calculator that creates “extendable” calculator objects.
The task consists of two parts.  (see https://javascript.info/array-methods)
*/
describe("Calculator", function () {
    let calculator;
    before(function () {
        calculator = new Calculator();
    });
    it("calculate(12 + 34) = 46", function () {
        assert.strictEqual(calculator.calculate("12 + 34"), 46);
    });
    it("calculate(34 - 12) = 22", function () {
        assert.strictEqual(calculator.calculate("34 - 12"), 22);
    });
    it("add multiplication: calculate(2 * 3) = 6", function () {
        calculator.addMethod("*", (a, b) => a * b);
        assert.strictEqual(calculator.calculate("2 * 3"), 6);
    });
    it("add power: calculate(2 ** 3) = 8", function () {
        calculator.addMethod("**", (a, b) => a ** b);
        assert.strictEqual(calculator.calculate("2 ** 3"), 8);
    });
});

describe("sort users bay age", function () {
    let johhn = { name: "John", age: 25 };
    let pette = { name: "Pete", age: 30 };
    let marry = { name: "Mary", age: 28 };

    //let arr5 = [pette, johhn, marry];
    it("sorted", function () {
        arr.sort((num1, num2) => num1.age - num2.age);
        let arr1 = [pette, johhn, marry];
        //let num = sortByAge(arr1);
        assert.strictEqual(sortByAge(arr1), John, Mary, Pete);
        // assert.strictEqual(sortByAge(arr1[1].name), johhn);
        // assert.strictEqual(sortByAge(arr1[2].name), marry);
    });

});
describe("sheffil", function () {
    it("shefil", function () {
        let arr2 = [1, 2, 3];
        assert.strictEqual(shuffle(arr2), [3, 2, 1]);
    });
});
/* Create a function unique(arr) that should return an array with unique items of arr. */
describe("unique", function () {
    let arr = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
    it("tests unique hare krishnas", function () {
        assert.deepEqual(unique(arr), [
            "Hare",
            "Krishna",
            ":-O"
        ]);
    });
});
/*
Let’s say we received an array of users in the form {id:..., name:..., age... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
see example:  https://javascript.info/array-methods
Such function is really handy when working with server data.
In this task we assume that id is unique. There may be no two array items with the same id.
Please use array .reduce method in the solution.
*/
describe("groupById", function () {
    it("creates an object grouped by id", function () {
        let users = [
            { id: 'john', name: "John Smith", age: 20 },
            { id: 'ann', name: "Ann Smith", age: 24 },
            { id: 'pete', name: "Pete Peterson", age: 31 },
        ];
        assert.deepEqual(groupById(users), {
            john: { id: 'john', name: "John Smith", age: 20 },
            ann: { id: 'ann', name: "Ann Smith", age: 24 },
            pete: { id: 'pete', name: "Pete Peterson", age: 31 },
        });
    });
    // it("works with an empty array", function () {
    //     users = [];
    //     assert.deepEqual(groupById(users), {});
    // });
});

describe("average by id", function () {
    let jjohn = { name: "John", age: 25 };
    let ppete = { name: "Pete", age: 30 };
    let mmary = { name: "Mary", age: 29 };

    it("average by id", function () {
        let arr7 = [jjohn, ppete, mmary];
        assert.strictEqual(getAverageAge(arr7), 28);
    });

});