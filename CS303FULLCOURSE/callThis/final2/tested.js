"use strict";
/*eslint-disable*/
// /*function perimeter() {
//     console.log(this);
//     return 4 * this.side;
// }
// const shape = { side: 5, perimeter: perimeter };
// shape.perimeter()
// const myPerim = shape.perimeter;
// myPerim()*/

// //object
// let john = { name: "John", surname: "Smith", age: 10 };
// let pete = { name: "Pete", surname: "Hunt", age: 20 };
// let redda = { name: "Redda", surname: "Hunt", age: 6 }
// let people = [john, pete, redda];
// let result = people.map((item) => {
//     return {
//         firstName: item.name + "" + item.surname,
//         age: item.age
//     }
// });
// console.log(result);
// //reduce method
// const num = [5, 55, 1, 33];
// let result2 = num.reduce((mini, initial) => mini > initial ? initial : mini, num[0]);
// console.log(result2);
// //by function
// function min(arr) {
//     let mini = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < mini) {
//             mini = arr[i];
//         }
//     }
//     return mini;
// }
// console.log(min(num));
// let rsu = people.reduce((min, person) => {
//     if (min.age > person.age) {
//         return person;
//     }
//     return min;
// }, people[0]);

// //callback
// function myFind(arr, callBack) {
//     for (let n of arr) {
//         if (callBack(n))
//             return n;
//     }
// }
// const num1 = [1, 2, 3, 4, 5, 8];
// let funCaBa = num1 => num1 % 2 === 0;
// console.log(myFind(num1, funCaBa));
//tree
let node4 = {
    name: "label",
    children: null
};
let node5 = {
    name: "input",
    children: null
};
let node3 = {
    name: "p",
    children: null
};
let node2 = {
    name: "div",
    children: [node4, node5],
    class: "classNode"
};
let node1 = {
    name: "body",
    children: [node2, node3],
};
function classAdder(root, result = []) {
    result.push(root.name + "" + root.value);
    if (root.children !== null) {
        for (let node of root.children) {
            classAdder(node, result);
        }
    }
    return result;
}
console.log(classAdder(node1));

function tenClock() {
    let timer = setInterval(dataFun, 1000);
    function dataFun() {
        let currDate = new Date();
        console.log(currDate.getHours() + ":" + currDate.getMinutes() + ":" + currDate.getSeconds());
        if (currDate.getMinutes() >= 57)
            clearInterval(timer);
    }


}
tenClock();

