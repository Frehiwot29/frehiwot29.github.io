const prompt = require("prompt-sync")();
let input_number = prompt("Enter the digite: ");
let sum = 0;
while (input_number) {
    sum += input_number % 10;
    input_number = Math.floor(input_number / 10);

}
console.log(sum);

