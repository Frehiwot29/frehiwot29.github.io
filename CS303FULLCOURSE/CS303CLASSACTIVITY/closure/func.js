"use strict";
/*eslint-disable*/
function outerFunction(outerVariable) {
    const outer2 = "hi";
    return function innerFunction(innerVariable) {
        console.log("out variable: " + outerVariable);
        console.log("inner Variable: " + innerVariable);
        console.log(outer2);
    }
}
const newFunction = outerFunction("outside");
newFunction('inner');

//2nd
function outerFunction(url) {
    fetch(url).then(() => {
        console.log(url);
    });
}
const newFunction1 = outerFunction('outerside');
newFunction('inner');