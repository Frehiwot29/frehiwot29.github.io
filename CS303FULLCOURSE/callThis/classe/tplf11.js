"use strict";
/*eslint-disable*/
function User(name) {
    console.log("1:", this);
    console.log("1:", this);
    this.name = name;
    console.log("2:", this);
    console.log("2:", this);
}
let tina = {};
const thisUser = User.bind(tina);
thisUser("Adonay");
thisUser("Simon");
console.log("3: ", tina);
console.log("3: ", tina);