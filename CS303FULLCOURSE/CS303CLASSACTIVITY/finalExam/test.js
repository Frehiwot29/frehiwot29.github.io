"use strict";
/*eslint-disable*/
/**
 * @param{number} blue
 * @returns {number}
 */
let brown= 10;
function someFun(blue) {
 let green= 108;
 if (blue >= brown) {
 blue = Math.sqrt(blue) //6
 }
 brown= green + blue;//114
 console.log(blue + " " + green + " " + brown); //6 108 114
 return blue;
}
console.log(brown); //10
console.log(someFun(36));//6 
console.log(brown); //114
console.log(green);//error