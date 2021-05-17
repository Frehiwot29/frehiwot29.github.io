//"use strict";
/*eslint-disable*/
function a() {
    console.log(this);
}
const b = {
    dog: 'fido',
    log: function () {
        console.log(this);
    }
}
console.log(this); // this generally is window object
a(); // a() is called by global window object in non-strict mode
b.log(); // log() is called by a object
let mylog = b.log;
mylog(); //mylog() is called by global window object in non-strict mode
