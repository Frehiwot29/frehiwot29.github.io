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


function filterRangeInPlace(arr,a,b){
    for(let i=0;i<arr.length;i++)
    
}
let arr=[1,2,3,4,5,6];
let inplace=filterRangeInPlace(arr,1,4);
console.log(inplace);
