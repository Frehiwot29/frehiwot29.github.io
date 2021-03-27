"use strict";
/*eslint-disable*/
/*let myObj = {
    user1: {
        fname: "john",
        lname: "doe"
    },
    user2: {
        fname: "john",
        lname: "doe"
    },
    equals: function () {
        return this.user1 === this.user2;
    }
}
console.log(myObj.equals());*///false

//] Fill in the blank for the output of the following code.
/*let anotherObject = { color: "green" };
let color = 'red';
let myObject = {
    anotherObject: { color: 'blue' },
    printColor: function () {
        console.log(this.anotherObject.color);
    }
}
myObject.printColor();*/
/**
 * Write a JavaScript function "checkExam" that returns the grade number. The function receives
 * two arguments, two arrays:
 * - The first input array contains the correct answers to an exam
  -  The second input array is "answers" array and contains student's answers.
  -  Return the grade number for the array of answers, giving +4 for each correct
    answer,-1 for each incorrect answer
  -  If the score < 0, return 0.
Example:
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) →6
checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]) →7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) →16
checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) →0

 */
/*function checkExam(key, answer) {
    let result = 0;
    for (let i = 0; i < key.length; i++) {
        if (key[i] === answer[i]) {
            result += 4;
        } else {
            result - 1;
        }

    }
    return result;

}
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));*/
/**
 *  Write a function ‘thisProgramIsTheBest’ which takes 3 parameters. First two 
parameters are objects that have property ‘age and the last one is a function, 
“cbFun”. If the age properties are equal, then return “Same Age!”, otherwise call the 
cbFun function with the input parameters as arguments, and then return “Different 
Ages”.
 */
/*function thisProgramIsTheBest(obj1, obj2, cbFun) {
    if (obj1.age === obj2.age) {
        return "Same Age!";
    } else {
        cbFun(obj1, obj2);
        return "Different Ages";
    }

}*/

/**
 * . Fill in the blanks below ?
 */
/*function haveFun() {
    let fun = {
        myFuns: []
    }
    let i = 0;
    while (i < 3) {
        let myFunc = function () {
            console.log("Fun : " + i);
        }
        fun.myFuns.push(myFunc);
        i++;
    }
    return fun;
}
let anotherFun = haveFun;
let result = anotherFun();
let output1 = result.myFuns[1];
let output2 = result.myFuns[0]();
console.log(anotherFun); //_function itself______
console.log(result); //_____object__________________
console.log(output1);// _________function______________
console.log(output2);//fun 3*/

/**
 * ] Write an iterative function, sumOfSquares(n) that will compute the sum of squares of 
all integers from 1 to n. E.g., sumOfSquares(3) will compute 1 + 4 + 9 and return 14.
 */
function sumOfSquares(num) {
    let result = 0;
    for (let i = 0; i < num; i++) {
        result += i * i;

    }
    return result;
}
console.log(sumOfSquares(3));