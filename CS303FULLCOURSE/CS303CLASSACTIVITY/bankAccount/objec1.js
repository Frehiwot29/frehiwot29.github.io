"use strict";
/*eslint-disable*/
const data = {
    code: 23,
    item: [{
        id: 1,
        name: "Kalab"
    }, {
        id: 2,
        name: "Simon"
    }]
};
console.log(data.item[0].name)//kalab
console.log(data.item[0].id)//1
console.log(data.item[1].name)//simon
console.log(data.item[1].id)//2
//Object -->Key are only number
let pets = { 0: "cat", 1: "dog", 2: "mouse" };
console.log("Object -->Key are only number")
console.log(pets[0]);//cat
console.log(pets[1]);//dog
console.log(pets[2]);//mouse
//Object ---->Keys are mixed of number and character
let pets2 = { 0: "cat", "2ab": "dog", "3y3": "mouse" };
console.log("Object ---->Keys are mixed of number and character");
console.log(pets2[0]);//cat
console.log(pets2["2ab"]);//dog
console.log(pets2["3y3"]);//mouse
//Array of Object
let pets3 = [{ prop1: "cat", prop2: "dog", prop3: "mouse" }];
console.log("Array of Object");
console.log(pets3[0].prop1);//cat
console.log(pets3[0].prop2);//dog
console.log(pets3[0].prop3);//mouse
console.log(pets3[0]["prop1"]);//cat
console.log(pets3[0]["prop2"]);//dog
console.log(pets3[0]["prop3"]);//mouse
//Array of objects of Array of object
const pets4 = [
    { prop1: "cat", prop2: "dog", prop3: "mouse" },
    { prop1: "apple", prop2: "banana", prop3: "chiwy" },
    { prop1: [{ name: "Henary", age: 2, bread: "buully" }] }
];
console.log("Array of objects of Array of object");
console.log(pets4[0]["prop1"])//cat
console.log(pets4[1]["prop2"])//banana
console.log(pets4[2]["prop1"])//[{ name: "Henary", age: 2, bread: "buully"}]
console.log(pets4[2].prop1[0]["name"]);//Henary
console.log(pets4[2].prop3)
