"use strict";
/*eslint-disable*/
/*
➢ Exercise: fix the code at right
➢ Using bind
*/
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
        this.students.forEach(function (student) {
            // Error: Cannot read property 'title' of undefined
            console.log(this.title + ': ' + student);
        }.bind(group));
    }
};
group.showList();

/*
➢ Exercise: fix the code at right
➢ Using arrow function


*/
let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
        this.students.forEach((student => {
            // Error: Cannot read property 'title' of undefined
            console.log(this.title + ': ' + student);
        }));
    }
};
group1.showList();
//spreed
const obj = {
    x: 1,
    y: {
        a: 1,
        b: 2
    }
};

let objClone = { ...obj };

objClone.x = 100; //it is a clone
objClone.y.b = 5; //not a deep clone
console.log(obj);

let clone2 = JSON.parse(JSON.stringify(obj));
clone2.x = 200; //it is a clone
clone2.y.b = 500; // deep clone
console.log(obj);
