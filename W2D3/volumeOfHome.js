"use strict";
const prompt = require("prompt-sync")();
let num1 = +prompt("Enter the side of triangle: ");
let num2 = +prompt("Enter the side of triangle: ");
let num3 = +prompt("Enter the side of triangle: ");
let width = +prompt("Enter the width of the house: ");
let depth = +prompt("Enter the value of depth: ");
let height = +prompt("Enter the heigth: ");
let semiCercum = (num1 + num2 + num3) / 2;
//roofVolume = triangleArea*width
/**
 * @return {number} triangleArea of a triangle
 */
function triangleArea() {
    let triangleArea = Math.sqrt(semiCercum * (semiCercum - num1) * (semiCercum - num2) * (semiCercum - num3));
    return triangleArea;
}
/**
 * @return {number} roofVolum
 */
function VolumeOfRoof() {
    let roofVolume = triangleArea() * width;
    return roofVolume;

}
//livingVolume = width * height * depth
/**
 * @return {number} livingVolume of the presim
 */
function volumeOfLiving() {
    let livingVolume = width * height * depth;
    return livingVolume;
}

//houseVolume = livingVolume + roofVolume
/**
 * @return {number} houseVolum
 */
function volumeOfTheHouse() {
    let houseVolume = volumeOfLiving() + VolumeOfRoof();
    return houseVolume;

}
let result1 = volumeOfTheHouse();
let result2 = volumeOfLiving();
let result3 = VolumeOfRoof();
let result4 = triangleArea();

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);