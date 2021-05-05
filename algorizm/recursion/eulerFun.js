"use strict";
/*eslint-disable*/
class EulerTour {
    visitExternal(T, p, r) {

    }
    visitPreOrder(T, p, r) {

    }
    visitInOrder(T, p, r) {

    }
    visitPostOrder(T, p, r) {

    }
    eulerTour(T, p) {
        let r = new Array(3);
        if (T.isExternal(p)) {
            this.visitExternal(T, p, r);
        }
        else {
            this.visitPreOrder(T, p, r);
            r[0] = this.eulerTour(T, T.leftChild(p));
            this.visitInOrder(T, p, r);
            r[2] = eulerTour(T, T.rightChild(p));
            this.visitPostOrder(T, p, r);
        }
        return r[1];
    }
}
class Print extends EulerTour {
    visitExternal(T, v, result) {
        result[1] = ""; // empty string base case
    }
    visitPostOrder(T, v, result) {
        result[1] = "(" + result[0]
            + v.element() + result[2] + ")";
    }
    print(T) {
        if (T.size() > 0) {
            console.log("Root=" + T.root().element());
        }
        let res = this.eulerTour(T, T.root());
        console.log("[" + res + "]\n");
    }
}
let num = new EulerTour()
//visitExternal(num)
visitPreOrder(num)
console.log(num.visitInOrder())
console.log(num.visitPostOrder())
