"use strict";
/*eslint-disable*/

/*const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        sum += arr[i][j];
        //result.push(sum);
    }
}
console.log(sum);
//another
//const arr=[[1,2,3],[4,5,6],[7,8,9]];
let total = 0;
for (const innerArray of arr) {
    for (const number of innerArray) {
        total += number;
    }
}

console.log(total);*/

/*let user = {
    name: "John",
    age: 30,
    isAdmin: true
};
for (let key in user) {
    // keys
    console.log(key); // name, age, isAdmin
    // values for the keys
    console.log(user[key]); // John, 30, true

}*/
function sayHi() {
    console.log(this);
}

sayHi();