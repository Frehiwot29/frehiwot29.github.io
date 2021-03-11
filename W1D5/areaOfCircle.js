/**
 * 2. Write a function that computes and returns area of a circle based on the value of input radius.
     a. Write a function that compute volume of a cylinder and making use of function that
      computes area of a circle.
 * 
*/
const prompt = require("prompt-sync")();
let redius = prompt("Enter the redius of the circle: ");

function areacircle(redius) {
    let area = Math.PI * Math.pow(redius, 2);
    return area;

}
let heigth = prompt("Enter the heigth of cylinder: ");
function volumeCylinder(heigth) {
    let volume = heigth * areacircle(redius);
    return volume;

}
console.log(areacircle(redius));
console.log(volumeCylinder(heigth));



