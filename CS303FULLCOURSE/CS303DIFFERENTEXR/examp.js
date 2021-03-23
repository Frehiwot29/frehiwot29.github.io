"use strict";
/*eslint-disable*/
/*let calc = function (num1, num2, calcType) {
    if (calcType === "add") {
        return num1 + num2;
    } else if (calcType === "subt") {
        return num1 - num2;

    } else if (calcType === "multi") {
        return num1 * num2;
    } else if (calcType === "div") {
        return Math.ceil(num1 / num2);
    }
};
console.log(calc(2, 3, "add"));
console.log(calc(2, 3, "subt"));
console.log(calc(2, 3, "multi"));
console.log(calc(2, 3, "div"));*/


//you can change in other style for each appliction have its own function
/*let add = function (a, b) {
    return a + b;
}
let multi = function (a, b) {
    return a * b;
}
let sub = function (a, b) {
    return a - b;
}
let div = function (a, b) {
    return Math.ceil(a / b);
}
let calc1 = function (num1, num2, callback) {
    return callback(num1, num2);
};
console.log(calc1(2, 3, multi));
console.log(calc1(2, 3, div));
console.log(calc1(2, 3, add));
console.log(calc1(2, 3, sub));*/

//how to sort 
/*let myArr = [{
    num: 5,
    str: "apple"
}, {
    num: 7,
    str: "cabbage"
}, {
    num: 1,
    str: "banana"

}]
myArr.sort(function (val1, val2) {
    if (val1.num > val2.num) {
        return -1;
    } else {
        return 1;
    }

});
console.log(myArr);*/
//object
/*function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...other properties
    };
}

let user = makeUser("John", 30);
console.log(user.age);*/
// for loop
/*let users = {
    name: "fre",
    age: 32,
    isAdmin: true,
    show: function () {
        console.log("give me");
    }

}
for (let key in users) {
    console.log(key);
    console.log(users[key]);

}*/
//additional 
/*const prompt = require("prompt-sync")();
function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("A number please?: ", 0);
        // should we cancel?
        if (value === "" || value === null || !isFinite(value))
            break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(sumInput());*/
//class example
function sayHi() {
    console.log("Hello");
}
const myHi = sayHi;
//console.log(sayHi);
console.log(sayHi());
// function higherOrder() {
//     return sayHi();
// }
// higherOrder();
function higherOrder() {
    return sayHi;
}
higherOrder()();