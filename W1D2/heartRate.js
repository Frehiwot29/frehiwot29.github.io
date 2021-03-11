const prompt = require("prompt-sync")();
let age = parseInt(prompt("Enter the age: "));
let slowestHeartRate = (220 - age) * 0.65;
let fastestHeartRate = (220 - age) * 0.85;
console.log("slowest heartRate: " + slowestHeartRate);
console.log("Fastest HeartRate: " + fastestHeartRate);