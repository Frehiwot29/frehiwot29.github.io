"use strict";
/*eslint-disable*/
function myPower(x, k) {
    if (k === 0)
        return 1;
    if (k === 1)
        return x;
    let newK = Math.floor(k / 2);
    result = myPower(newK);
    result = result * result;
    if (k % 2 === 1) {
        result = result * x;
        return result;
    } else {
        return x * myPower(x, k - 1);
    }

}
console.log(myPower(2, 3));