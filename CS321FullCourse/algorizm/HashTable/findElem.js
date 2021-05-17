"use strict";
/*eslint-disable*/
function findElement(k) {
    let h = 0;
    let i = h(k)
    let p = 0;
    do {
        let x = (i + p) % N;
        let c = A[x]
        if (c === empty()) {
            return No_SUCH_KEY;
        } else if (c.key() === k) {
            return c.element()
        } else {
            p = p + 1;
        }

    } while (p < N)
    return No_SUCH_KEY;
}
console.log(findElement(8));