"use strict";
/*eslint-disable*/
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