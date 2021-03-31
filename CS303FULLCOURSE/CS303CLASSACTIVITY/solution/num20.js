"use strict";
/*eslint-disable*/
/**
 * 20. [4] Complete the code for an object, rectangle. 
 * It should have properties for length and width. 
 * It should have methods to compute and return 
 * the area and the circumference.
 */
const rectangle={
    length:this.length,
    width:this.width,
    // setValue=function(length,width){
    //     this.width=width;
    //     this.length=length
    // },
    area:function(){
        return this.length*this.width
    },
    circumfernce:function(){
        return 2*(this.length+this.width)
    }
}
rectangle.length=20;
rectangle.width=2,
console.log(rectangle.area())
console.log(rectangle.circumfernce())