"use strict";
/*eslint-disable*/
let student = {
    name: "Simon",
    stuClass: "VI",
    rollNum: 12
}
for (let pro in student) {
    console.log(pro);
}
/**
 * Write a JavaScript program to delete the rollno property from the following object. 
 * Also print the object before or after deleting the property.
 */
let student1 = {
    name: "Simon",
    stuClass: "VI",
    rollNum: 12
}
console.log(student1);
delete student1.rollNum;
console.log(student1);
/**
 * //Write a JavaScript program to get the length of a JavaScript object.
 */
function studentSize(objStudent) {
    let count = 0;
    for (let key in objStudent) {
        if (objStudent.hasOwnProperty(key))
            count++;
    }
    return count;
}
console.log(studentSize(student1));

/**
 * Write a JavaScript program to calculate the area and perimeter of a circle. 
 * Go to the editor Note : Create two methods to calculate the area and perimeter. 
 * The radius of the circle will be supplied by the user.
 */
function circle(redius) {
    this.redius = redius;
    this.area = function () {
        return Math.PI * this.redius * this.redius;
    }
    this.peremetir = function () {
        return Math.PI * 2 * this.redius;
    }
}
let valu = new circle(2);
console.log(valu.area().toFixed(3));
console.log(valu.peremetir().toFixed(4));




