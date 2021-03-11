"use strict";
/*eslint-disable*/
let car = {};
car.name = "Toyota",
    car.model = "camry",
    console.log(car);
car.model = "Rav4";
console.log(car.model);
delete car.name;
console.log(car);
/**
 * 
 * @param {String} str to check
 * @return {String} return str
 */
function checkSpam(str) {
    let result;
    let resultStr = str.toLowerCase();
    if (resultStr.includes("lottory") || resultStr.includes("prize")) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

console.log(checkSpam("i get a\"prize\"because i won \"lottory\" "));
console.log(checkSpam("i get a it because i won it "));
let familyOfKassa = {
    fName: "Adonay",
    lName: "Kassa",
    age: 5,
    salary: 12000
};
/**
 * 
 * @param {object} obj to
 * @return {number} count
 */
function countProperty(obj) {
    let count = 0;
    for (let fam in obj) {
        if (obj.hasOwnProperty(fam)) {
            count++;
        }
    }
    return count;
}
console.log(countProperty(familyOfKassa));
/**
 * 
 * @param {String} str1 to pull over suff
 * @param {String} str2 to pull over suff
 * @return {String} the suffex of the two string
 */
function commonSuffex(str1, str2) {
    let suffex = "";
    let count = 0;
    let length1 = str1.length - 1;
    let length2 = str2.length - 1;
    while (true) {
        if (str1[length1 - count] === str2[length2 - count]) {
            suffex = str1[length1 - count] + suffex;
            count++;
        } else {
            break;
        }
    }
    return suffex;
}
console.log(commonSuffex("swiming", "walking"));
/**
 * 
 * @param {String} str to
 * @return {String} str 
 */
function titleCase(str) {
    return str[0].toUpperCase() + str.substr(1, str.length - 1);
}
console.log(titleCase("jackson"));
let arr = [{ name: "abc", age: 20 }, { name: "xyz", age: 10 }];
/**
 * 
 * @param {Array} users to av
 * @return {number} sum
 */
function getAverageAge(users) {
    let sum = 0;
    for (let i = 0; i < users.length; i++) {
        sum += users[i].age;
    }
    return sum / users.length;

}
console.log(getAverageAge(arr));
/**
 * 
 * @param {number} num1 to
 * @param {number} num2 to
 * @return {number} my own
 */
function swapFunction(num1, num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;

    console.log(num1, num2);

}
let abc = 5;
let bcd = 7;
swapFunction(abc, bcd);

module.exports = { titleCase, commonSuffex, countProperty, checkSpam, getAverageAge,swapFunction };