"use strict";
/*eslint-disable*/
function power(num,k){
    if(k===0)
    return 1;
    if(k===1)
    return num;
    else 
    return num*power(num,k-1);
}
console.log(power(2,3));