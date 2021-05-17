"use strict";
/*eslint-disable*/
let obj1 = {
    name: "frew",
    last: "Asfaw",
}
let obj2 = {
    name: "Redda"
}
let printName = function (age, state) {
    console.log("first name " + this.name + " " + "last Name:" + this.last + " " + age + " " + state)
}
printName.call(obj1, 30, "127 MarthinLuther king ")
printName.apply(obj1, [30, "127 MarthinLuther king "])
printName.call(obj2, 31, "123 roxbery crossing")
printName.apply(obj2, [31, "123 roxbery crossing"])
printName.bind(obj2, 31, "123 roxbery crossing")()
printName.bind(obj1, 31, "123 roxbery crossing")()
