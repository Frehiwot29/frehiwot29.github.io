"use strict";
///*eslint-disable*/
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { getAverageAge, groupById, unique, filterRangeInPlace, filterRange, Calculator, sortByAge, shuffle };
//add all of your function names here that you need for the node mocha tests
//array methods
//filter range 1
/**
 * 
 * @param {Array} arr to
 * @param {number} num1 to
 * @param {number} num2 to
 * @return {number} filtered number
 */
function filterRange(arr, num1, num2) {
  // added brackets around the expression for better readability
  return arr.filter(item => (num1 <= item && item <= num2));
}
let arr1 = [5, 3, 8, 1];
let filtered = filterRange(arr1, 1, 4);
console.log(filtered); // 3,1 (matching values)
console.log(arr1); // 5,3,8,1 (not modified)
// function filterRange(arr, num1, num2) {
//   // added brackets around the expression for better readability
//   return arr.filter(item => (num1 <= item && item <= num2));
// }
// let arr1 = [5, 3, 8, 1];
// let filtered = filterRange(arr1, 1, 4);
// console.log(filtered); // 3,1 (matching values)
// console.log(arr1); // 5,3,8,1 (not modified)
// //Filter range "in place" 2
/**
 * 
 * @param {Array} arr to
 * @param {number} num1 to
 * @param {number} num2 to
 * @return {number} number
 */
function filterRangeInPlace(arr, num1, num2) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < num1 || val > num2) {
      arr.splice(i, 1);
      i--;
    }
  }
}
let arr2 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4
console.log(arr2); // [3, 1]
//Sort in decreasing order 3
let arr3 = [5, 2, 1, -10, 8];
arr3.sort((num1, num2) => num2 - num1);
console.log(arr3);
//Copy and sort array 4
/**
 * 
 * @param {Array} arr to
 * @return {Array} to
 */
function copySorted(arr) {
  return arr.slice().sort();
}
let arr4 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr4);
console.log(sorted);
console.log(arr4);
//Create an extendable calculator 5
/**
 * @return {number} num
 */
function Calculator() {
  this.methods = {
    "-": (num1, num2) => num1 - num2,
    "+": (num1, num2) => num1 + num2
  };
  this.calculate = function (str) {
    let split = str.split(" "),
      num1 = +split[0],
      oop = split[1],
      num2 = +split[2];
    if (!this.methods[oop] || isNaN(num1) || isNaN(num2)) {
      return NaN;
    }
    return this.methods[oop](num1, num2);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
let calc = new Calculator;
//alert( calc.calculate("3 + 7") ); // 
console.log(calc.calculate("3 + 7"));//10
//Map to names 6
/**
 * You have an array of user objects, each one has user.name. Write the code that 
 * converts it into an array of names.
 */
let john = {
  name: "John",
  age: 25
};
let pete = {
  name: "Pete",
  age: 30
};
let mary = {
  name: "Mary",
  age: 28
};
let users = [john, pete, mary];
let names = users.map(item => item.name);
console.log(names); // John, Pete, Mary
//Map to objects 7
/* You have an array of user objects, each one has name, surname and id.
   Write the code to create another array from it, of objects with id and fullName, 
   where fullName is generated from name and surname.
 */
let johnn = { name: "John", surname: "Smith", myid: 1 };
let petee = { name: "Pete", surname: "Hunt", myid: 2 };
let maryy = { name: "Mary", surname: "Key", myid: 3 };
let userss = [johnn, petee, maryy];
let usersMapped = userss.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  myid: user.myid
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
//Sort users by age 8
/**
 * 
 * @param {Array} arr to sort
 * @returns {Array} array
 */
function sortByAge(arr) {
  arr.sort((num1, num2) => num1.age - num2.age);
}
let johhn = { name: "John", age: 25 };
let pette = { name: "Pete", age: 30 };
let marry = { name: "Mary", age: 28 };
let arr5 = [pette, johhn, marry];
sortByAge(arr5);
// now sorted is: [john, mary, pete]
console.log(arr5[0].name); // John
console.log(arr5[1].name); // Mary
console.log(arr5[2].name); // Pete
//Shuffle an array 9
/**
 * 
 * @param {number} array to
 * @returns {number} num
 */
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
let arr6 = [1, 2, 3];
shuffle(arr6);
console.log(arr6);
//Get average age 10
/**
 * 
 * @param {number} users num
 * @return {number} number
 */
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let jjohn = { name: "John", age: 25 };
let ppete = { name: "Pete", age: 30 };
let mmary = { name: "Mary", age: 29 };
let arr7 = [jjohn, ppete, mmary];
console.log(getAverageAge(arr7)); // 28
//Filter unique array members 11
/**
 * 
 * @param {Array} arr to
 * @return {Array} array
 */
function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(strings)); // Hare, Krishna, :-O
//Create keyed object from array
//num 12
let uusers = [
  { myid: "john", name: "John Smith", age: 20 },
  { myid: "ann", name: "Ann Smith", age: 24 },
  { myid: "pete", name: "Pete Peterson", age: 31 },
];
//let usersById = groupById(users);
/**
 * 
 * @param {Array} array num
 * @return {number} num
 */
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}