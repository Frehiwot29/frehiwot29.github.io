//"use strict";
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
console.log(global);
abc.greet();  //Bonjour??  --> Hello!!??
console.log("===============:", global);
