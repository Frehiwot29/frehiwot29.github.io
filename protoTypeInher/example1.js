"use strict";
/*eslint-disable*/
let animals = {
    eat: true
};
function Rabbite(name) {
    this.name = name;
}
let rabbi = new Rabbite("Black");
rabbi.__proto__ = animals;
console.log(rabbi.eat);
