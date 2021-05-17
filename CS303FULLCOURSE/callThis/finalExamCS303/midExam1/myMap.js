"use strict";
/*eslint-disable*/
//my myMap
// const arr=[2,3,4,5,6];
// function myMap(arr,callback){
//     const newArray=[];
//     for(const elem of arr){
//         newArray.push(callback(elem));
//     }
//     return newArray;
// }
// const funNum=num=>num*2;
// console.log("expected result [4,6,8,10,12]",myMap(arr,funNum));
// //my myReduce
// function myReduce(arr,caBack,initialVal){
//     let accumulator=initialVal;
//     for(const elem of arr){
//         accumulator = caBack(accumulator,elem);
//     }
//     return accumulator;
// }
// const funNew=(sum,item)=>sum+item;
// console.log(arr.reduce(funNew));
// console.log("expected result: 20 ", myReduce(arr,funNew,0));
// //myFilter
// function myFind(arr,cbk,num){
//     let newAr=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===num)
//         newAr.push(cbk(arr[i]));
//     }
//     return newAr;
// }
// const myfinFu=num=>num%2===0;
// console.log(arr.find(myfinFu))
// console.log("expected [2,4,6]",myFind(arr,myfinFu,4));
// //my Filter
// function myFilter(arr,ckb){
//     let newArr=[];
//     for(const elem of arr){
//         newArr.push(ckb(elem));
//     }
//     return newArr;
// }
// const number=num=>num%2===0;
// console.log(arr.filter(number));
// console.log(myFilter(arr,number));

// //find index 
// function findIndex(arr,ckb){
//     for(let i=0;i<arr.length;i++){
//         if(ckb(arr[i])===num)
//         return i;
//     }
//     return -1;
// }

function  myFilter1(arr,callBack) {
   let result=[] 
   for(let n of arr){
       if(callBack(n))
         result.push(n)
   }
   return result
}
let array=[50,12,31,15,3]
function isEven(n) {
    return n%2===0  
}

// function  add(x,y) {
//     return x+y;
// }
// let n1=34;
// let n2=45
// console.log(add(n1,n2))

console.log(myFilter1(array,isEven))

    

    

    

    
