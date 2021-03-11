const prompt = require("prompt-sync")();
let num = +prompt("Enterthe number: ");
let num1 = 0;
let num2 = 1;
for (let i = 1; i <= num; i++) {
    let sum = num1;
    num1 = num1 + num2;
    num2 = sum;
    console.log(sum);
}

