"use strict";
/*eslint-disable*/
let list = {
    value: 1, next: {
        value: 2, next: {
            value: 3, next: {
                value: 4, next: null
            }
        }
    }
};
function printReverseList(list) {
    let arr = [];
    let temp = list;
    while (temp) {
        arr.push(temp);
        temp = temp.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
printReverseList(list);
//find display
function printList(list) {
    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}
printList(list);
//display
//Recursive structures
let node4 = {
    name: "label",
    value: "Name",
    children: null
};
let node5 = {
    name: "input",
    value: "this was typed bya user",
    children: null
};
let node3 = {
    name: "p",
    value: "This is text in thea paragraph",
    children: null
};
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
};
function display(node, result = []) {
    console.log(node.name, ":", node.value);
    if (node.children === null) return result;
    for (let element of node.children) {
        console.log(element);
        display(element, result);
    }

}
display(node2);

//function counter
function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    }
}
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

//count up and down
(function () {
    let message = "Hello";
    console.log(message); // Hello
})();
//couter
function Counter() {
    let count = 0;
    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}
let counter1 = new Counter();
console.log(counter1.up()); // ?
console.log(counter1.up()); // ?
console.log(counter1.down()); // ?
//object
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}
//users.sort((a, b) => a.name > b.name ? 1 : -1);
console.log(users.sort());
let array = users[2].name;
console.log(array);
console.log(users[0].surname + users[1].age);
console.log(array);
//shooter
function makeArmy() {
    let shooter = [];
    let i = 0;
    while (i < 10) {
        let shoots = function () {
            console.log(i);
        }
        shooter.push(shoots);
        i++;
    }
    return shooter;
}
let army = makeArmy();
army[0]();
army[1]();
army[2]();
/**
 * a) Create a student object with the properties first name and last name. 
   b) Create an array and add 2 student objects. 
   c) Use the forEach method to print out all the values and indices. Use function 
    declarations to declare any functions in the code.
 */
let obj1 = {
    fName: "Adu",
    lName: "Kassa",
    age: 12
}
let obj2 = {
    fName: "Simon",
    lName: "Kassa",
    age: 10
}
let arr = [];
arr.push(obj1);
arr.push(obj2);
arr.forEach(function (value, index) {
    console.log(value.fName + "--" + value.lName + " " + index);
});
arr.filter((value) => value.age > 2);

//sum of square number
/*function sumOfsquare(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i * i;
    }
    return sum;
}
console.log(sumOfsquare(10));
//sum of square number recursivlly
function sumOfsquare1(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * num + sumOfsquare1(num - 1);
    }

}
console.log(sumOfsquare1(10));*/
//product of square number
function producOfsquares(num) {
    let product = 1;
    for (let i = 1; i <= num; i++) {
        product *= (i * i);
    }
    return product;
}
console.log(producOfsquares(10));
//product of square number recursivlly
function sumOfsquare1(num) {
    if (num === 1) {
        return 1;
    } else {
        return (num * num) * sumOfsquare1(num - 1);
    }

}
console.log(sumOfsquare1(10));
/**
 * . [10] Write code for your own version of map. 
a. Your function must be a pure function. 
b. You cannot use JavaScript’s map method. 
c. The name will be myMap. 
d. It will have two parameters. The first will be an array of numbers. 
The second will be the map function. 
e. Write two examples of map functions that can be used with myMap, 
add10(number) and mult(10). add10 will add 10 to a number. mult10 will 
multiply a number by 10.
f. Show how you would use myMap and add10 and mult10 with a sample 
array, [4, 5, 6] .

 */
function myMap(arr, cbFun) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = cbFun(arr[i], i);
    }
    return result;

}
function add10(value) {
    return value + 10;

}
function mul10(value) {
    return value * 10;
}
let arr1 = [1, 2, 3, 4, 5];
console.log(myMap(arr1, mul10));
console.log(myMap(arr1, add10));
//console.log(myMap(arr1, mul10));
/**
 * Write a recursive function ‘changeValues’ that takes 3 parameters.
 * The first parameter is the node, second is the condition function and third is the modification function.
 * Modify all the nodes that meet the condition function with modification function.
 * Assume the following node structure:
 * {
     name: “John”,
      age : 5,zipCode : 52556,
     children :[]
    }
    function changeValues(node, condition, modifier) {}
 */
function changeValues(node, condition, modifier) {
    if (condition(node)) {
        node = modifier(node);
    }
    let children = node.children;
    if (children) {
        for (let i = 0; i < children.length; i++) {
            changeValues(children[i], condition, modifier);
        }
    }
}
/**
 * 5] Write an iterative function that returns true if the string is a palindrome, 
 * otherwise returns false.
 */
function palindrome(str) {
    let len = str.length;
    let mid = Math.floor(len / 2);
    for (let i = 0; i < mid; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(palindrome("madrde"));
/**
 *  Write a recursive function that returns true if a string is a palindrome, 
 * otherwise false
 */
function isPalindrom(str) {
    if (str.length === 0) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrom(str.substring(1, str.length - 1));
}
console.log("expecting false: " + isPalindrom("hi there"));
console.log("expecting true: " + isPalindrom("hannah"));
//spreed oprator
function sum(x, y, ...more) {
    //"more" is array of all extra passed params
    let total = x + y;
    if (more.length > 0) {
        for (let i = 0; i < more.length; i++) {
            total += more[i];
        }
    }
    console.log("Total: " + total);
    return total;
}
sum(5, 5, 5);
sum(6, 6, 6, 6, 6);
/**
 *  Write a JavaScript function "checkExam" that returns the score of an exam.The
 * function takes an array as it argument, which contains objects with 2 properties. One
 * property is ‘answer’ holding the student answer and the other is ‘key’ holding the
 * correct answer. 
 */
//For example
[{ answer: "a", key: "a" }, { answer: "c", key: "a" }, { answer: "b", key: "b" }];//→4
[{ answer: "a", key: "a" }, { answer: "c", key: "a" }, { answer: "", key: "b" }];//→-1

function checkExam(exam) {
    let score = 0;
    for (let item of exam) {
        if (item.answer === item.key) {
            score += 4;
        } else if (item.answer === "") {
            score -= 1;
        } else {
            score -= 4;
        }
    }
    return score;
}

/**
 * . Write a function, absValue, that map can use to return a new array with 
 * the absolute value of each element. Below is an example usage.
 */
function absValue(arr) {
    return Math.abs(arr);
}
console.log(absValue([1, -2, 3, -4, 5, 6, -7]));

/**
 *  Write a recursive function ‘treeLog’. Its first parameter is a tree node. Its second
parameter is a function that runs a test on the node and returns true or false. Recurse
through the tree and log the type and value properties to the console for every node that
passes the function test. Each node has the following structure. An empty children array
indicates a leaf of the tree.
{
type: “input”,
value: “hello world”,
id: “input1”
children :[]
}
 */
function treeLog(node, testFunc) {
    if (testFunc(node)) {
        console.log(node.value);
    }
    let children = node.children;
    if (children) {
        for (let i = 0; i < children.length; i++) {
            treeLog(children[i], testFunc)
        }
    }

}
/**
 * . Write a function ‘makeWithdraw’ which returns a function that keeps track of bank accounts.
a-) makeWithdraw should return a closure that has a private variable to keep an array of
bankAccount objects.
b-) Each object in the array has properties: name, savingAccountBalance and
checkingAccountBalance.
c-) When you call the closure, ‘makeWithdraw’, with the name and withdrawal amount it
will withdraw the money from the account according to the rules below:
-If checking account has enough balance, deduct the money from checking account.
-If checking account does not have enough balance, deduct all the money from checking
account then try to deduct the rest of the money from savings account.
-If neither checking account nor savings account has enough balance return an error.

 */
function makeWithdraw() {
    let accounts = []
    return function (name, amount) {
        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].name === name) {
                if (accounts[i].checkingBalance >= amount) {
                    accounts[i].checkingBalance -= amount;
                } else {
                    if ((accounts[i].savingBalance +
                        accounts[i].checkingBalance) > amount) {
                        accounts[i].checkingBalance = 0;
                        amount -= accounts[i].checkingBalance;
                        accounts[i].savingBalance -= amount;
                    } else {
                        return 'You need to earn more money !!!'
                    }
                }
            }
        }
    }
}
/**
 *  Write a constructor function ‘MakeAccount’ that returns a bank account object.
1. The bank account object has three methods: withdraw, deposit, and balance.
2. The account should have a private variable, balance, which is accessed by the three
methods. The private variable should not be accessible by code external to the object.
3. The balance method will return the value of the balance private variable.
4. The withdraw and deposit methods will deduct or increase the balance private variable.
 */
function MakeAccount() {
    let balance = 0;
    this.withdraw = function (amount) {
        balance -= amount;
    }
    this.deposit = function (amount) {
        balance += amount;
    }
    this.balance=function(){
        return balance;
    }
}
let account=new MakeAccount();
account.withdraw(1990);
account.deposit(200000);
