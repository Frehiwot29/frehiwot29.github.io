"use strict";
/*eslint-disable*/
let john = { name: "John", surname: "Smith", age: 10 };
let pete = { name: "Pete", surname: "Hunt", age: 20 };
let adu = { name: "Adonay", surname: "Kassa", age: 5 };
let simon = { name: "Simon", surname: "Kassa", age: 3 };
let people = [john, pete, adu, simon];

//Use the map function to map the people array to the following:
[{ fullName: "John Smith", id: 1 },
{ fullName: "Pete Hunt", id: 2 },];

let usersMapped = people.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    age: user.age
}));
console.log(usersMapped);
let myuser = people.filter(item => item.age <= 10);
console.log(myuser);
let myfind = people.find(item => item.age === 3);
console.log("expected:", myfind);

/*const mapped = people.map(function (person) {
    const newObj = {
        fullName: person.name + " " + person.surname,
        age: person.age
    };
    return newObj;
});
console.log(mapped);*/