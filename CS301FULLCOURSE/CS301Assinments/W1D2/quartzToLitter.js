const prompt = require("prompt-sync")();
let quarts = parseFloat(prompt("Enter the value of quarts: "));
let litter = quarts * 0.945;
console.log(litter);