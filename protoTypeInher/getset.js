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
let teacher = {
    teach: true,
    evalu: function () {
        return `${this.name}`;
    },
    __proto__: admin
};
console.log(teacher.isAdmin);
console.log(teacher.fullName);
console.log(admin.fullName); // John Smith (*)
// setter triggers!
admin.fullName = "Alice Cooper"; // (**)
console.log(admin.fullName); // Alice Cooper, state of admin modified
console.log(user.fullName);