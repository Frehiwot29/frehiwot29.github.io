"use strict";
/*eslint-disable*/
const abc = {
    salute: "",
    greet: function () {
        this.salute = "Hello";
        console.log(this.salute); //Hello
        const setFrench = function (newSalute) {
            this.salute = newSalute;
            console.log(this);
        };
        setFrench("Bonjour");
        console.log(this.salute); //Bonjour
    }
};
abc.greet();  //Bonjour??  --> Hello!!??
