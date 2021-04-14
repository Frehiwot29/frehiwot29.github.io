"use strict";
/*eslint-disable*/
function Person(name) {
    console.log("number one: ", this);//____surgen{}________
    this.name = name;
    console.log("number two: ", this);//___surgen{name:"fred"}________________
}
function Doctor(name, departiment) {
    console.log("number three: ", this);//___surgen{}_________________________
    Person.call(this, name, departiment);
    console.log("number four: ", this);//___surgen{name:"fred"}________________________
    this.dept = departiment;
}
Doctor.prototype.report = function () {
    return "Medical report";
}
function Surgeon(name, departiment) {
    console.log("number five: ", this);//_____surgen{}______________________
    Doctor.call(this, name, departiment);
    console.log("number six: ", this);//____surgen{name:"fred",dept:cardiology}_________________________
}
Surgeon.prototype.operate = function () {
    return "operation performed";
}
Surgeon.prototype.__proto__ = Doctor.prototype;
let surg1 = new Surgeon("fred", "cardiology");
console.log("number surge1: ", surg1.dept);//____cardiology______________________
console.log("number surge2: ", surg1.name);//_____fred________________
console.log("number surge3: ", surg1.report());//___Medical report___________________
console.log("number surge4: ", surg1);//____sergen{name:"fred",dept:"cardiolgy"}_____________________________
console.log("number surge5: ", surg1.__proto__);//____surgen{operation:[function]}_____________________
console.log("number surge6: ", surg1.prototype);//____undefiend_____________________________
console.log("number surge7: ", Surgeon.__proto__);//__[Function]_____________
console.log("number surge8: ", Surgeon.prototype);//__sergen{operation:[function]}__________________
console.log("number surge9: ", Surgeon.prototype.__proto__);//__Doctor{report:[Function]}________________

