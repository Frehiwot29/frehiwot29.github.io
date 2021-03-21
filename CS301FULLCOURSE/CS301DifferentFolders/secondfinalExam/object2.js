"use strict";
/*eslint-disable*/
let myValue = 20;
function trouble(myValue) {
    //x = x * 2;//
    myValue = myValue % 7;
    //console.log(x);
    console.log(myValue);//6//6//4
    return myValue * 10;
    console.log(myValue);//unreachable line of code  //un reachible
}
console.log(myValue);//20
trouble(myValue);
console.log(myValue);//20
//calling
myValue = trouble(myValue);
console.log(myValue);//60
//calling
myValue = trouble(myValue);
console.log(myValue);//40