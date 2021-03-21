const prompt = require("prompt-sync")();
let kilometer = parseFloat(prompt("Enter the input in kilometer: "));
let mile = kilometer * 0.62;
console.log(mile);