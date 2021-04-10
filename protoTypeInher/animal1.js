"use strict";
// animal has methods
let animal = {
    walk: function () {
        if (!this.isSleeping) {
            console.log("I walk");
        }
    },
    sleep: function () {
        this.isSleeping = true;
    }
};
let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};
let cat = {
    name: "Dumu",
    __proto__: rabbit
};
for (let pop of animal) {
    console.log(pop.__proto__);
}
// modifies rabbit.isSleeping
cat.walk();
rabbit.sleep();
console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined (no such property in the prototype)
console.log(cat.isSleeping); // undefined (no such property in the prototype)

