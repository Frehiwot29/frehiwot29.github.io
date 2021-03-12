"use strict";
/**
 * 
 * @param {String} str to
 * @return {String} str 
 */
function titleCase(str) {

    return str[0].toUpperCase() + str.substr(1, str.length - 1);
}
console.log(titleCase("jackson"));
/*
let words ="biking hiking swiming".split()://["biking","hiking","swiming"]
let arr=str.split()
for(let i=0;i<arr.length;i++){
    str[0].toUpperCase() + str.substr(1, str.length - 1);
}
return arr.join();
*/