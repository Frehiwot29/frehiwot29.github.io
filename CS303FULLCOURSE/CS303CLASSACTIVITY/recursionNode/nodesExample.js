"use strict";
let person = {
    fName: "Asbom",
    lName: "niTega",
    age: 11
};
person.phoneNum = {
    areaCode: +251,
    number: 913633382
};
console.log(person.phoneNum + ": " + person.age);
let list = { value: 1 };
list.next = { value: 2 };
console.log(list);
list.next.next = { value: 3 };
console.log(list);
list.next.next.next = { value: 4 };
console.log(list);
// prepend the new value to the list
list = { value: "new item", next: list };
