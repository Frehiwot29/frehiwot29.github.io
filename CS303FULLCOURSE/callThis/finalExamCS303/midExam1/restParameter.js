"use strict";
/*eslint-disable*/
function add(...arg){
    let result=0;
    for(const elem of arg){
        result+=elem;
    }
    return result;
}
console.log(add(1,2,3));//6
console.log(add(1,2,3,4,5));//15
console.log(add(1,2,3,4,5,6));//21
console.log(add(1,2,3,4,5,6,7,8,9));//45
//string
function xyz(x,y,...z){
    console.log(x,'',y);
    console.log(z);
    console.log(z[0]);
    console.log(z.length);
}
console.log(xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy"));
  //spread operator
  function add(a,b,c){
      return a+b+c;
  }
  const args=[1,2,3];
  console.log(add(...args));
      
   

    
