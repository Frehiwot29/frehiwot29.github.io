"use strict";
//const prompt = require("prompt-sync")();
//let redius = +prompt("Enter the redius of the circle: ");
/**
 * 
 * @param {number} redius of the cicle
 * @return {number} area of the circle
 */
function areacircle(redius) {
    let area = Math.PI * Math.pow(redius, 2);
    return area;

}
//let heigth = prompt("Enter the heigth of cylinder: ");
/**
 * 
 * @param {number} heigth of the cylinder
 * @return {number} volume of the cylinder
 * @param{number}redius;
 */
function volumeCylinder(heigth, redius) {
    let volume = heigth * areacircle(redius);
    return volume;

}
//console.log(areacircle(redius));
//console.log(volumeCylinder(heigth));
module.exports = { volumeCylinder, areacircle };
