"use strict";
/*eslint-disable*/
function removeMiddle(L) {
    let f = L.first();
    let l = L.last();
    while (f != l) {
        f = L.after()
        e = L.befor(f);
    }
    return e.element();
}
console.log(removeMiddle([1, 2, 3, 4, 5, 6]));