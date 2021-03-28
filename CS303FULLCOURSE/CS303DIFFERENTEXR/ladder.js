"use strict";
/*eslint-disable*/
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    }
};

ladder.up().up().down().up().down().up().showStep();


//find method by id or by name
let users = [{ id: 29, name: "Adonay" }, { id: 23, name: "Simon" }, { id: 16, name: "Kalab" }];
let fam = users.find(item => item.id == 29);
console.log(fam.name);

//filter
let familar = users.filter(item => item.id > 40);
console.log(familar);

// let name=[Bilbo,Gandalf,Nazgul];
// let arr=name.sort(";");
// for(let name of arr){
//     console.log(`A massage to ${name}`);
// }
/*function camelCase(str) {
    let arr = str.split("");
    let num = arr.map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice());

console.log(comelCase(num));
}*/
function filterRange(arr, a, b) {
    return arr.filter(item => (a < item && item < b));
}
let num = [1, 2, 3, 4, 5, 6];
console.log(filterRange(num, 2, 4));

/**
 * Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes
 *  from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
   The function should only modify the array. It should not return anything.
 */
/*function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = [i];
        if (val < a || val > b)
            arr.splice(i, 1);
        i--;

    }
}
let array = [5, 3, 8, 1];
console.log(filterRangeInPlace("This is the: " + " " + array, 1, 4));*/


/**
 * Sort in decreasing order
 */
let arr = [1, 2, 3, 23, 4, 67, 8];
arr.sort((a, b) => a - b);
console.log(arr);