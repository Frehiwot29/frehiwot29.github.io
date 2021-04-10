"use strict";
let user = {
    name: "John",
    surname: "Smith",
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};
let admin = {
    __proto__: user,
    isAdmin: true
};
let student = {
    __proto__: user,
    isStudent: true

};
console.log(admin.fullName); // John Smith (*)
// setter triggers!
admin.fullName = "Alice Cooper"; // (**)
console.log(admin.fullName); // Alice Cooper, state of admin modified
console.log(user.fullName); // John Smith, state of user protected
console.log(student.fullName); // John Smith, state of user protected
console.log(student.__proto__); // John Smith, state of user protected
console.log(admin.__proto__); // John Smith, state of user protected