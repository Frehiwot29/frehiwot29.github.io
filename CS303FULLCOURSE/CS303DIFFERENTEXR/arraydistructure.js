"use strict";
/*eslint-disable*/
/*const team = { point: "bob", shooting: "fred" };
const { point, shooting } = team;
console.log(point);
console.log(shooting);
//distructure
const team1 = ["Simon", "Adonay", "Kalab"];
const [Simon, Adonay, Kalab] = team1;
console.log(Simon);
console.log(Adonay);
console.log(Kalab);
//json stringfy
let team3 = {
    point: "bob",
    shooting: "fred"
};
let json = JSON.stringify(team3);
console.log(json);
//distructur the team of onto variables;one(point guard),two(shooting guard),three(small forwared)
//four(power guard) five(center)
// console.log("expect: ")
// we have an array with the name and surname
let arr = ["John", "Smith"];

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName); // John
console.log(surname);  // Smith
//----------------->
let [firstName1, surname1] = "John Smith".split(" ");
console.log(firstName1); // John
console.log(surname1);  // Smith
//------------------>
// second element is not needed
let [firstName2, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(title);
console.log(firstName2);*/
//console.log("");

//---------->
/*let user = {};
[user.name, user.surname] = "John Smith".split(" ");

console.log(user.name); // John
console.log(user.surname);
//---------->
let user1 = {
    name: "John",
    age: 30
};
// loop over keys-and-values
for (let [key, value] of Object.entries(user1)) {
    console.log(`${key}:${value}`); // name:John, then age:30
}
for (let num of Object.entries(user1)) {
    console.log(`${num}`); // name:John, then age:30
}

//-------------->
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is array of items, starting from the 3rd one
console.log(name1);
console.log(name2);
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2

//--------->
const prompt = require("prompt-sync")();
let [name = prompt("name?"), surname = prompt("surname?")] = ["Julius"];

console.log(name);    // Julius (from array)
console.log(surname);*/
//----------------->
/*let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let { title, width, height } = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
//------------------>
let option = {
    title1: "Menu",
    width: 100,
    height: 200
};

// { sourceProperty: targetVariable }
let { width: www, height: huu, title1 } = option;

// width -> w
// height -> h
// title -> title

console.log(title1);  // Menu
console.log(www);      // 100
console.log(huu);      // 200
//------------------->
let option2 = {
    title: "Menu",
    height: 200,
    width: 100
};

// title = property named title
// rest = object with the rest of properties
//let { title, ...rest } = option2;

// now title="Menu", rest={height: 200, width: 100}
console.log(rest.height);  // 200
console.log(rest.width);*/
//--->Nested loop
let options4 = {
    size: {
        width2: 100,
        height3: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
    size: { // put size here
        width2,
        height3
    },
    items: [item1, item2], // assign items here
    title3 = "Menu" // not present in the object (default value is used)
} = options4;

console.log(title3);  // Menu
console.log(width2);  // 100
console.log(height3); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut
//--------->time zone
let today = new Date();

today.setHours(1);
console.log(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);
console.log(today);

