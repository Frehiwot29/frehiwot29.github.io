"use strict";
/*eslint-disable*/
/*function sumMatrics(arr){
    let result=[];
    let sum=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr[i].length;j++){
            sum+=arr[i][j];
            result.push(sum);
        }
    }
    return result;
}
const arr=[[1,2,3],[4,5,6],[7,8,9]];
console.log(sumMatrics(arr));*/
//another
let total = 0;
for (const innerArray of arr) {
    for (const number in arr) {
        total += number;
    }
}
const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr);