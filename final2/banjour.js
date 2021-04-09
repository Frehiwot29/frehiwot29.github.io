"use strict";
/*eslint-disable*/
console.log("expected out put will be helloBonjour")
console.log("\nusing this is not works as expected b.c of loose this properties\n")
const abc1 = {
    salute: "",
    greet: function () {
        //console.log(this)///prints the abc1
        this.salute = "Hello";
        console.log(this.salute); //Hello
        const setFrench = function (newSalute) {
            this.salute = newSalute;
            //console.log(this.salute); //Bonjour }
        };
        setFrench("Bonjour");
        console.log(this.salute); //Bonjour }
    },
};
abc1.greet();

console.log("\nusing self patterns this works as expected\n ");
const abc = {
    salute: "",
    greet: function () {
        const self = this;
        self.salute = "Hello";
        console.log(self.salute); //Hello
        const setFrench = function (newSalute) {
            //inner function
            self.salute = newSalute;
        };
        setFrench("Bonjour");
        console.log(self.salute); //Bonjour }
    },
};
abc.greet();

console.log("\nusing arrow function works this as expected\n ");
const abc2 = {
    salute: "",
    greet: function () {
        console.log(this)
        this.salute = "Hello";
        console.log(this.salute); //Hello
        const setFrench = (newSalute) => {
            this.salute = newSalute;
        };
        setFrench("Bonjour");
        console.log(this.salute); //Bonjour }
    },
};
abc2.greet();

console.log("\nusing binds works this as expected\n ");
const abc3 = {
    salute: "",
    greet: function () {
        //console.log(this)
        this.salute = "Hello";
        console.log(this.salute); //Hello
        let setFrench = function (newSalute) {
            this.salute = newSalute;
        };
        setFrench.bind(this, "Bonjour")();
        console.log(this.salute); //Bonjour }
    },
};
abc3.greet();

console.log("\nusing call works this as expected\n ");
const abc4 = {
    salute: "",
    greet: function () {
        //console.log(this)
        this.salute = "Hello";
        console.log(this.salute); //Hello
        let setFrench = function (newSalute) {
            this.salute = newSalute;
        };
        setFrench.call(this, "Bonjour");
        console.log(this.salute); //Bonjour }
    },
};
abc4.greet();

console.log("\nusing apply works this as expected\n ");
const abc5 = {
    salute: "",
    greet: function () {
        //console.log(this)
        this.salute = "Hello";
        console.log(this.salute); //Hello
        let setFrench = function (newSalute) {
            this.salute = newSalute;
        };
        setFrench.apply(this, ["Bonjour"]);
        console.log(this.salute + "\n"); //Bonjour }
    },
};
abc5.greet();