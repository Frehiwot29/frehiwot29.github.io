"use strict";
/*eslint-disable*/
const animal = {
    eats: true
};
const rubbit = {
    name: "white Rabbite",
    __proto__: animal
};
console.log(rubbit.eats)
console.log(rubbit.name)
// function Rabbit(name) {
//     this.name = name;
// }
// Rabbit.prototype = animal;
// let rabbit = new Rabbit("White Rabbit"); //rabbit.__proto__ == animal
// alert(rabbit.eats); //