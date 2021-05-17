"use strict";
/*eslint-disable*/
function sumFirst(num) {
    if (num < 0)
        throw invaliedInputException
    return sumFirstHelper(num, 0)
}
function sumFirstHelper(num, s) {
    if (num === 0)
        return s
    else
        return num + sumFirst(num - 1, num + s);
}
console.log(sumFirst(9, 0));