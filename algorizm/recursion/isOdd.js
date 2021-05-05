"use strict";
/*eslint-disable*/
function isEven(num) {
    if (num === 0)
        return true;
    else
        return isOdd(num - 1);
}
function isOdd(num) {
    if (num === 1)
        return true;
    else
        return isEven(num - 1);
}
console.log(isOdd(9));
console.log(isOdd(8));
console.log(isOdd(7));
console.log(isOdd(6));