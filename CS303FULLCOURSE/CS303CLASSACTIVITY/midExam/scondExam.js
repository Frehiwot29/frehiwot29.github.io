"use strict";
/* eslint-disable */
/*let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};
function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
    // title, items – taken from options,
    // width, height – defaults used
    console.log(`${title} ${width} ${height}`); // My Menu 200 100
    console.log(items); // Item1, Item2
}
showMenu(options);*/
/**
 * write a function that take a sentence as input and returns average of the words in the sentence.
 * if the sentenceis empty return 0;
 */
function average(str) {
    let arr = str.split(" ");
    let average = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].length;

    }
    average = sum / arr.length;
    return average;
}
let str = "Hello i am";
console.log(average(str));
// console.log(str.split(" "))
let abc = str.split("");
console.log(abc.length);

//write any additional code 
function squareOrCube(value, square, cube) {
    if (value < 10) {
        return square(value);
    } else {
        return cube(value);
    }
}
console.log(squareOrCube(10, square, cube));
console.log(squareOrCube(9, square, cube));
function square(value) {
    return value * value;
}
function cube(value) {
    return value * value * value;

}


//about JSON
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
console.log(numbers[1]); // 1

let user3 = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user3 = JSON.parse(user3);
console.log(user3.friends[1]); // 1
user3.loc = { lat: 22, long: 99 }

let user = {
    name: "John Smith",
    age: 35,
    friend: user3,
    favNums: numbers,
};
let json2 = JSON.stringify(user);
console.log(json2);
let user2 = JSON.parse(json2);
console.log(user2);
user2.friend.age = 85;
user2.friend.loc.lat = 123;
console.log(user3.age);
console.log(user3.loc.lat);

