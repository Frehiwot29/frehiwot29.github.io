"use strict";
/*eslint-disable*/
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    }
};

ladder.up().up().down().up().down().up().showStep();


//find method by id or by name
let users = [{ id: 29, name: "Adonay" }, { id: 23, name: "Simon" }, { id: 16, name: "Kalab" }];
let fam = users.find(item => item.id == 29);
console.log(fam.name);

//filter
let familar = users.filter(item => item.id > 40);
console.log(familar);

// let name=[Bilbo,Gandalf,Nazgul];
// let arr=name.sort(";");
// for(let name of arr){
//     console.log(`A massage to ${name}`);
// }
