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