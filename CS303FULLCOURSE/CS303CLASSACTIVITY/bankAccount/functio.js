"use strict";
/*eslint-disable*/
//about fun
function display() {
    console.log("no parameter");
}
function display(a, b) {
    console.log(a, b);
}
//display();
//sdisplay(1, 2, 3);
function display() {
    console.log(this);
}
//display();
//object litral
const student = { id: 123, name: "john" };
console.log(student);
student.age = 23;
console.log(student);
student.display = function () {
    console.log(this.credit);//undefined
    console.log(this);//
}
student.display();
//what is the different between 
let student1 = student;
let student2 = Object.assign({}, student);
student1.course = ["CS303", "CS301"];
student2.course = ["CS301"];
console.log(student);
console.log(student1);
console.log(student2);
//constructor function
function Student(id, name) {
    //this {} implicity
    this.id = id;
    this.name = name;
    //return implicity
    this.display = function () {
        console.log(this.id, this.name);
    }
}
let stud1 = new Student(1, "john");
let stud2 = new Student(2, "jim");
console.log(stud1);
console.log(stud2);
