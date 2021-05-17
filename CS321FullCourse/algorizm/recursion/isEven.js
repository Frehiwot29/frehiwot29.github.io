"use strict";
/*eslint-disable*/
function isEven(num) {
    if (num === 0)
        return true;
    if (num === 1)
        return false;
    else
        return isEven(num - 2);
}
console.log(isEven(7));
console.log(isEven(6));
console.log(isEven(8));
console.log(isEven(11));