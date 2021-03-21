/*
  Write a defining table and then a program that determines what time a child should go to bed.
   Your program must read a child’s age and the season (winter, spring, summer, or fall) from the
    keyboard and output the child’s bedtime according to this table:
     Age                 Season                           Bed Time
    5 or younger       summer, fall                       8:30 PM
                       winter, spring                     8:00 PM
    6 to 12            summer                             9:30 PM
                       winter, spring, fall               8:30 PM
    13 and older       summer                             10:30 PM
                       winter, spring, fall               9:30 PM
*/
"use strict";
const prompt = require("prompt-sync")();
let age = +prompt("Enter the age of a child: ");
let season = prompt("Enter the season: ");
let bedtime;
if (age > 0 && age <= 5) {
    if (season === "summer" || season === "fall") {
        bedtime = "8:30";
    }
    if (season === "winter" || season === "spring") {
        bedtime = "8:00";
    }
} else if (age >= 6 && age <= 12) {
    if (season === "summer") {
        bedtime = "9:30";

    }
    if (season === "winter" || season === "spring" || season === "fall") {
        bedtime = "8:30";

    }

} else if (age >= 13) {
    if (season === "summer") {
        bedtime = "10:30";
    }
    if (season === "winter" || season === "spring" || season === "fall") {
        bedtime = "9:30";
    }

}
console.log(bedtime);