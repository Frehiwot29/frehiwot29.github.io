"use strict";
/*eslint-disable*/
let myValue = 20;
function trouble(x) {
    x = x * 2;//
    myValue = myValue % 7;
    console.log(x);//40 //12
    console.log(myValue);//6 //6
    return myValue * 10;
    console.log(myValue);//unreachable line of code  //un reachible
}
console.log(myValue);//20  //6
trouble(myValue);
console.log(myValue);//6  //6
//calling
myValue = trouble(myValue);
console.log(myValue);//6
//calling
myValue = trouble(myValue);
console.log(myValue);//40