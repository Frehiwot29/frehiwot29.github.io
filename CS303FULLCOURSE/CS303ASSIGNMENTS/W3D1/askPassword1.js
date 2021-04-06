"use strict";
const prompt = require("prompt-sync")();
/**
 * 
 * @param {String} ok input
 * @param {String} fail worng input
 * @return {String} input 
 */
function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok();
    else fail();
}
let user = {
    name: "John",
    login(result) {
        console.log(this.name + (result ? " logged in" : " failed to log in"));
    }
};
askPassword("?", "?"); // ?