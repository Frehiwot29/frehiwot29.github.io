"use strict";
/*eslint-disable*/
let animal = {
    sayHi() {
      alert(`I'm an animal`);
    }
  };
  
  // rabbit inherits from animal
  let rabbit = {
    __proto__: animal,
    sayHi() {
      super.sayHi();
    }
  };
  let plant = {
    sayHi() {
      alert("I'm a plant");
    }
  };
  // tree inherits from plant
  let tree = {
    __proto__: plant,
    sayHi: rabbit.sayHi // (*)
  };
  
  tree.sayHi();  // I'm an animal (?!?)