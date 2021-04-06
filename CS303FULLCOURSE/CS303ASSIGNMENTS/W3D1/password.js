"use strict";
/* exports at end of file since exporting an object, which can only be referenced 
after definition */
/* eslint-disable */
"use strict";
//const prompt = require("prompt-sync")();
/**
 * 
 * @param {String} okk num
 * @param {String} fail num
 * @returns {Number} number
 */
function askPassword(okk, fail, password) {
    if (password == "rockstar") return okk();
    else return fail();
}
let user = {
    name: "John",
    loginOk() {
        return `${this.name} logged in`;
    },
    loginFail() {
        return `${this.name} failed to log in`;
    },
};
askPassword(user.loginOk.bind(user), user.loginFail.bind(user), "rockstar");
/**
 * 
 * @param {String} ok input
 * @param {String} fail worng input
 * @return {String} input 
 */
function askPassword2(ok, fail, password) {
    if (password == "rockstar") return ok();
    else return fail();
}
let user2 = {
    name: "John",
    login(result) {
        console.log(this.name + (result ? " logged in" : " failed to log in"));
    }
};
askPassword("?", "?"); // ?
"use strict";
/**
 * @return {Number} to bind
 */
function sayHi() {
    console.log(this.name);
}
sayHi.test = 5;
let bound = sayHi.bind({
    name: "John"
});
console.log(bound.test); // what will be the output? why?

/* You need the module.exports when testing in node.
Comment it out when you send your file to the browser
*/
//module.exports = { askPassword, user, askPassword2, user2 }; //add all of your function names here that you need for the node mocha tests