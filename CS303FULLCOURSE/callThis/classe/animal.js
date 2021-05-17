"use strict";
/*eslint-disable*/
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}
let animal = new Animal("My animal");
//extends or inherinate
class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
    stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
    }
}
let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!
//rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop();
//animal.hide();
animal.stop();