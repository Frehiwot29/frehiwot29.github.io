"use strict";
/*eslint-disable*/
describe("My own map", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        peopleArray = [{ name: "Sam", age: 15 }, 
        { name: "William", age: 6 }, 
        { name: "Lucy", age: 13 }, 
        { name: "Barney", age: 80 }];
    });
    it("doubles an array of numbers", function () {
        function double(arr){
            let doubleArr=[]
            for(let n of arr){
                doubleArr.push(n*2)
            }
            return doubleArr;
        }
        assert.deepEqual(myMap(numArray,double), [10, 0, 14, 154, -40, 600, 102, 4]);
       assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
    });
    it("the original array is not updated", function () {
       assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
    });
});
//////////////////////////////////////
describe("My own filter", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        peopleArray = [{ name: "Sam", age: 15 }, 
        { name: "William", age: 6 }, 
        { name: "Lucy", age: 13 }, 
        { name: "Barney", age: 80 }];
    });
    it("filter all even number", function () {
        function evenNum(arr){
            let evenArr=[]
            for(let n of arr){
                 if(n%2===0){
                    evenArr.push(n)
                 }  
            }
            return evenArr;
        }
        assert.deepEqual(myFilter(numArray,evenNum), [0,-20,300,2]);
    });
    it("the original array is not updated", function () {
       assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
    });
});

////////////////////////////////////////////
describe("My own reduce", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        peopleArray = [{ name: "Sam", age: 15 }, 
        { name: "William", age: 6 }, 
        { name: "Lucy", age: 13 }, 
        { name: "Barney", age: 80 }];
    });

    it("reduce to sum of element", function () {
        function sumAll(arr){
            let sum=0;
            for(let n of arr){
                 sum+=n 
            }
            return sum;
        }
        assert.deepEqual(myReduce(numArray,sumAll,0), 422);
    });
    it("the original array is not updated", function () {
       assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
    });
});

/////////////////////////

describe("My own find", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        peopleArray = [{ name: "Sam", age: 15 }, 
        { name: "William", age: 6 }, 
        { name: "Lucy", age: 13 }, 
        { name: "Barney", age: 80 }];
    });

    it("find the given  element", function () {
        function findValue(arr,n){
            for(let element of arr){
                if(element===n)
                return n;
            }
            //undefined
        }
        assert.deepEqual(myFind(numArray,findValue,77),77 );
    });
    it("if the required element not in the array is undefined", function () {
        function findValue(arr,n){
            for(let element of arr){
                if(element===n)
                return n;
            }
        }
        assert.deepEqual(myFind(numArray,findValue,17),undefined );
    });
    it("the original array is not updated", function () {
       assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
    });
});

///////////////////////////////////////////
describe("My own findIndex", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        peopleArray = [{ name: "Sam", age: 15 }, 
        { name: "William", age: 6 }, 
        { name: "Lucy", age: 13 }, 
        { name: "Barney", age: 80 }];
    });

    it("find index of the given  element", function () {
        function searchIndex(arr,n){
            for(let i=0;i<arr.length;i++){
                if(arr[i]===n)
                 return i;
            }
        return -1;
        }
        assert.deepEqual(myFindIndex(numArray,searchIndex,77),3);
    });
    it("if the required element is not element of the array -1", function () {
        function searchIndex(arr,n){
            for(let i=0;i<arr.length;i++){
                if(arr[i]===n)
                 return i;
            }
        return -1;
        }
        assert.deepEqual(myFindIndex(numArray,searchIndex,17),-1);
    });
    it("the original array is not updated", function () {
       assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
    });
});

///////////////////////////////
describe("My own findLastIndex", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51,77, 2];
        peopleArray = [{ name: "Sam", age: 15 }, 
        { name: "William", age: 6 }, 
        { name: "Lucy", age: 13 }, 
        { name: "Barney", age: 80 }];
    });

    it("find last index of the given  element", function () {
        function lastIndex(arr,n){
            for(let i=arr.length;i>=0;i--){
                if(arr[i]===n)
                 return i;
            }
        return -1;
        }
        assert.deepEqual(myFindLastIndex(numArray,lastIndex,77),7);
    });
    it("if the required element is not element of the array return -1", function () {
        function lastIndex(arr,n){
            for(let i=arr.length;i>=0;i--){
                if(arr[i]===n)
                 return i;
            }
        return -1;
        }
        assert.deepEqual(myFindLastIndex(numArray,lastIndex,17),-1);
    });
    it("the original array is not updated", function () {
       assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51,77, 2]);  //test for pure function
    });
});
////////////////////////////////////////////////////////
describe("My own includes", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51,77, 2];
        peopleArray = [{ name: "Sam", age: 15 }, 
        { name: "William", age: 6 }, 
        { name: "Lucy", age: 13 }, 
        { name: "Barney", age: 80 }];
    });

    it("include even number", function () {
        function valueInclude(arr,n){
            for(let i=0;i<arr.length;i++){
                if(arr[i]===n)
                 return true;
            }
        return false;
        }
        assert.deepEqual(myIncludes(numArray,valueInclude,-20),true);
    });
    it("include even number ", function () {
        function valueInclude(arr,n){
            for(let i=0;i<arr.length;i++){
                if(arr[i]===n)
                 return true;
            }
        return false;
        }
        assert.deepEqual(myIncludes([5,11,47,53,85],valueInclude,59),false);
    });
    it("the original array is not updated", function () {
       assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51,77, 2]);  //test for pure function
    });
});



