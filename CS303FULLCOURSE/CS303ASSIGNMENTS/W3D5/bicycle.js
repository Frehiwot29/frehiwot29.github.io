"use strict";
/*eslint-disable*/
//https://www.geeksforgeeks.org/inheritance-in-java/  
// Java program to illustrate the
// concept of inheritance
// base class
const bicycle = {
    gear: 1,
    speed: 0,
    speedUp: function (increment) {
        this.speed += increment;
    },
    applyBrake: function (decrement) {
        this.speed -= decrement;
    },
};

console.log("bicycle object: ", bicycle);
let mountainBike = {
    gear: 3,
    speed: 2   //102-10 = 92
}

mountainBike.__proto__ = bicycle; //[[property]]

//bicycle.type = "Nike";
//mountainBike.type = "Bike"
console.log(mountainBike.speedUp(100));
console.log(mountainBike.applyBrake(10));

console.log(mountainBike.speed);
console.log(mountainBike.gear); //Nike
console.log("mountainBike object", mountainBike);
console.log("mountainBike object", bicycle);

//console.log(bicycle.prototype);

