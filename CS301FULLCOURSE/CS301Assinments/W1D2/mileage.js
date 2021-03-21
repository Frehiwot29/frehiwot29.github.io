"use strict";
const prompt = require("prompt-sync")();
let beginingOdo = parseFloat(prompt("Enter the begining odometer: "));
let endingOdo = parseFloat(prompt("Enter the End odometer value: "));
let usedGas = parseFloat(prompt("Enter the gas by galon: "));
let mileagepergalon = (endingOdo - beginingOdo) / usedGas;
console.log(mileagepergalon + "mpg");
