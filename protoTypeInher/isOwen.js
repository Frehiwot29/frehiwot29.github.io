"use strict";
/*eslint-disable*/
let animal = {
    eats: true,
    walk: function () {
        console.log("Am walking");
    },
    runing: function () {
        console.log("Am running");
    },
    reading: function () {
        console.log("I have read many Books");
    }
};
let rabbit = {
    jumps: true,
    __proto__: animal
};
let cat = {
    run: true,
    __proto__: rabbit
}
for (let prop in cat) {
    let isOwn = cat.hasOwnProperty(prop);
    if (isOwn) {
        console.log(`Our: ${prop}`); // Our: jumps
    } else {
        console.log(`Inherited: ${prop}`); // Inherited: eats
    }
}