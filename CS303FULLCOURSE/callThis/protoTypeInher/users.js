"use strict";
let user = {
    firstName: "Default",
    lastName: "Default",
    getFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
};
let john = Object.create(user);
john.firstName = "john";
john.lastName = "smith";
john.getFullName();
let william = Object.create(user);
william.firstName = "willian";
william.lastName = "Happy";
william.getFullName();