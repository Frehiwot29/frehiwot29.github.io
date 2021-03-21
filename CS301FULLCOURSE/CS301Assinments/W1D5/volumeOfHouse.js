const prompt = require("prompt-sync")();
let a = +prompt("Enter the side of triangle: ");
let b = +prompt("Enter the side of triangle: ");
let c = +prompt("Enter the side of triangle: ");
let width = +prompt("Enter the width of the house: ");
let depth = +prompt("Enter the value of depth: ");
let height = +prompt("Enter the heigth: ");
let s = (a + b + c) / 2;
//roofVolume = triangleArea*width

function triangleArea() {
    let triangleArea = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return triangleArea;
}
function VolumeOfRoof() {
    let roofVolume = triangleArea() * width;
    return roofVolume;

}
//livingVolume = width * height * depth
function volumeOfLiving() {
    let livingVolume = width * height * depth;
    return livingVolume;
}

//houseVolume = livingVolume + roofVolume
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

