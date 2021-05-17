"use strict";
/*eslint-disable*/
// function Counter() {
//     let count = 0;
//     this.up = function () {
//         return ++count;
//     };
//     this.down = function () {
//         return --count;
//     };
// }
// let counter = new Counter();
// console.log(counter.up());//1
// console.log(counter.up());//2
// console.log(counter.down());//1


class Counter {
    constructor() {
        this._count = 0;
    }
    up() {
        return ++this._count;
    };
    down() {
        return --this._count;
    };
}
let counter = new Counter();
console.log(counter.up());//1
console.log(counter.up());//2
console.log(counter.down());//1





