"use strict";

const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
};
const Intern = {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern"
};

/**
 * @returns {undefined} 
 */
function sayHi() {
    //IMPLEMENT THIS
    const name = this.name;
    const age = this.age;
    const job = this.job;
    console.log("My name is: ", name);
    console.log("My age is: ", age);
    console.log("My job is: ", job);
}

// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.'
Intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'