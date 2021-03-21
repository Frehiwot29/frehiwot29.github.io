/*
  Write a program that calculates down payment for a home loan based on following rules.
        Cost of House                     Down Payment
    $0 to less than 50K              5% of the cost
    $50K to less than 100K           $1000 + 10% of (cost - $50K)
    $100K to less than 200K          $2000 + 15% of (cost - $100K)
    $200K and above                  $5000 + 10% of (cost - $200K)*/
const prompt = require("prompt-sync")();
let costOfHouse = prompt("Enter the cost of house: ");
let downPayment;
if (costOfHouse <= 50000) {
    downPayment = costOfHouse * 0.05;

} else if (costOfHouse >= 50000 && costOfHouse < 100000) {
    downPayment = 1000 + (costOfHouse - 50000) * 0.1;
} else if (costOfHouse >= 100000 && costOfHouse < 200000) {
    downPayment = 2000 + (costOfHouse - 100000) * 0.15;

} else if (costOfHouse >= 200000) {
    downPayment = 5000 + (costOfHouse - 100000) * 0.10;
}
console.log(downPayment);
