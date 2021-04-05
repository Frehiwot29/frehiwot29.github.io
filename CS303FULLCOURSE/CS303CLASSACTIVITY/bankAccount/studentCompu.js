"use strict";
/*eslint-disable*/
/**
 * for the given students array below, complate the avarage of the student who took
 * CS303 course.
 * you are not allowed to use for while ,do-while,for,forEach loop
 */
const students = [
    { name: "Adonay", grade: 96, course: ["CS301", "CS303"] },
    { name: "Simon", grade: 95, course: ["CS301", "CS303"] },
    { name: "Kalab", grade: 94, course: ["CS301", "CS305"] },
    { name: "Eyual", grade: 95, course: ["CS301", "CS308"] },
    { name: "Banaher", grade: 92, course: ["CS301", "CS303"] },
    { name: "Haben", grade: 91, course: ["CS301", "CS304"] }
];
let sum = students.filter(stu => stu.course.includes("CS303"));
//let sum4=students.filter(stu1=>stu1.grade.includes(95);
let sum1 = students.map(stu => stu.grade);
let len = 0;
let sum2 = students.reduce((sum, current, index, array) => {
    len = array.length;
    return sum + current;
});
let averag = students.filter(s => s.course.includes("CS304"));

console.log(sum);
//console.log(sum4);
console.log(sum1);
console.log(sum2 / len);
console.log(averag);