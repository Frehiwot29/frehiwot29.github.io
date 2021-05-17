"use strict";
/*eslint-disable*/
function Player(name, age) {
    this.age = age;
    this.name = name;
}
Player.prototype.player = function () {
    return this.name + "is playing";
}
let fred = new Player("Fred", 12);
console.log(fred.age === 12);//_____true_________
console.log(fred.age);//_____12_________
console.log(fred.__proto__.age === 12);//_____false_________
console.log(fred.__proto__.age);//____undefined__________
console.log(Player.__proto__.name === "Fred");//___false___________
console.log(Player.__proto__.name);//_____{}_________
console.log(Player.prototype.player() === "Fred is playing");//___false___________
console.log(Player.prototype.player());//______undefined ________
console.log(fred.player() === "Fred is playing");//_____false_________
console.log(fred.player());//_____fredis playing_________
let pete = new Player("pete", 15);
console.log(Player.prototype.name === "pete");//______false________
console.log(pete.__proto__ === fred.__proto__);//______true________
