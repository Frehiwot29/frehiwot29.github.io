"use strict";
/*eslint-disable*/
//https://www.geeksforgeeks.org/inheritance-in-java/  
// Java program to illustrate the
// concept of inheritance
// base class
let bicycle = {
    // the Bicycle class has two fields
    gear: 2,
    speed: 4,
    // the Bicycle class has three methods
    applyBrake: function () {
        this.speed -= decrement;
    },
    speedUp: function () {
        this.speed += increment;
    }
};
// the Bicycle class has one constructor
function Bicycle(gear, speed) {
    this.gear = gear;
        this.speed = speed;
}
let bicyc = new Bicycle(gear, speed);
bicyc.applyBrake();
bicyc.speedUp();
// derived class
mountainBike.__proto__ = bicycle;
// the MountainBike subclass adds one more field
mountainBike.seatHeight;
// setHeight:function(){
//     this.seatHeight=newValue;
// }
// the MountainBike subclass has one constructor
function MountainBike(gear, speed, startHeight) {
    // invoking base-class(Bicycle) constructor
    this.gear = gear;
    this.speed = speed;
    this.seatHeight = startHeight;
};
let mountanB = new MountainBike(gear, speed, startHeight);
mountanB.speedUp(100);
mountanB.applyBrake(123);
// the MountainBike subclass adds one more method
let setHeight = {
    seatHeight: "newValue"
}
console.log(mountanB.applyBrake(1000));


