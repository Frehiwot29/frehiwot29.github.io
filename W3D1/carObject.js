"use strict";
let car = {};
car.make = "Toyota",
    car.model = "camry",
    console.log(car);
car.model = "Rav4";
console.log(car.model);
delete car.make;
console.log(car);