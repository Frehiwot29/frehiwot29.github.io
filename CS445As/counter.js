// function makeCounter() {
//     let count = 0;

//     return function () {
//         return count++;
//     };
// }

// let counter = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3
// console.log(counter()); // 4
function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

let counter = new Counter();

console.log(counter.up());//1
console.log(counter.up());//2
console.log(counter.up());//3
console.log(counter.down());//2
console.log(counter.down());//1
console.log(counter.down());//0