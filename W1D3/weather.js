/**
 * 1. Write a program that helps a user choose the correct footwear for the day’s weather based on
    the table shown below. If the user enters any other weather type, your program should output
    “sneakers”
    Weather    Footwear
     hot       sandals
     rain      galoshes
     snow      boots

*/
const prompt = require("prompt-sync")();
let Weather = prompt("Enter the weather type: ");
let footwear;
switch (Weather) {
    case "hot":
        footwear = "sandals";
        break;
    case "rain":
        footwear = "galoshes";
        break;
    case "snow":
        footwear = "boots";
        break;
    default:
        footwear = "sneakers";
        break;

}
console.log(footwear);
