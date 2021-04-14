"use strict";
/*eslint-disable*/
class Button {
    constructor(value) {
        this.value = value;
    }
    click() {
        console.log(this.value);
    }
}
let button = new Button("hello");
setTimeout(button.click, 1000); //undefined
/**
 * hou can we fixthe loosing of the term [this]
 * 
 */
class Button1 {
    constructor(value) {
        this.value = value;
    }
    click = () => {
        console.log(this.value);
    }
}
let button1 = new Button1("hello");
setTimeout(button1.click, 1000);
