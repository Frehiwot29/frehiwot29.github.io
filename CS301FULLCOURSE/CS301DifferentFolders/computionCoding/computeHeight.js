"use strict";
/*eslint-disable*/
function computeHeight(height, cycle) {
    for (let i = 1; i <= cycle; i++) {
        if (i % 2 !== 0) {
            height = 2 * height
        } else {
            height += 1;
        }
    }
    return height;
}
console.log(computeHeight(1, 4))
console.log(computeHeight(1, 5))
console.log(computeHeight(1, 6))
console.log(computeHeight(7, 20))
