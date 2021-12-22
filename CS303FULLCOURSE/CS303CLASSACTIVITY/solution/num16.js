"use strict";
/*eslint-disable*/
/**
 * a) Create two student objects with the properties firstname and lastname,
 * and any
values you want.
b) Create an array and add the 2 student objects to the array.
c) Use the forEach method to print out all the values and indices. Use function
declarations to declare any functions in the code.
 */
let student1 = {
    firstName: "Redda",
    lastName: "Ezra"
}
let student2 = {
    firstName: "Kaleb",
    lastName: "Wel"
}
let array = [student1, student2]
array.forEach((element, index) => {
    console.log(element.firstName + "-" + element.lastName + "-" + index)
});