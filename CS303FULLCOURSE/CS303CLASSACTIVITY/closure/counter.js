"use strict";
/*eslint-disable*/
function makeCounter(){
    let count=1;
    function increamsnt(){
        return count++;
    }
    return increamsnt;
}
const counter1=makeCounter();
const counter2=makeCounter();
counter1();
counter1();
counter2();
console.log("expect 2:" ,counter1())
console.log("expect 2:" ,counter2())
console.log("expect 2:" ,counter1())
console.log("expect 1:" ,counter2())