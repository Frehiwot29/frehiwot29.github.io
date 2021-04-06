"use strict";
const prompt = require("prompt-sync")();
/**
 * 
 * @param {String} okk num
 * @param {String} fail num
 * @returns {Number} number
 */
function askPassword(okk, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") okk();
    else fail();
}
let user = {
    name: "John",
    loginOk() {
        console.log(`${this.name} logged in`);
    },
    loginFail() {
        console.log(`${this.name} failed to log in`);
    },
};
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));