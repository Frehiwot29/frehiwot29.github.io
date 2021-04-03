"use strict";
/*eslint-disable*/
function makeCounter(){
    let count=0;
    return function(){
        return count++;
    };
}
let counter1=makeCounter();
let counter2=makeCounter();
console.log(counter1())
console.log(counter1())
console.log(counter2())
console.log(counter2())