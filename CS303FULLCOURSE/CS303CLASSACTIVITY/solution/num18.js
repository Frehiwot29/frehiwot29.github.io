"use strict";
/*eslint-disable*/
function thisProgramIsTheBest(color1,color2,cbFunc){
  if(color1===color2)
  return "Same color"
return cbFunc()
}
function cbFunc(){
    return "different color"
}
// let cbFunc=()=>"different color"
console.log(thisProgramIsTheBest("red","red",cbFunc))
console.log(thisProgramIsTheBest("red","blue",cbFunc))
console.log(["hell"][0].split(""))
    
