"use strict";
/*eslint-disable*/
function perimeter() {
    console.log(this);//fun
    return 4 * this.side;
}
const shape = { side: 5, perimeter: perimeter };
shape.perimeter();
const myperim = shape.perimeter;
myperim();//undefined
//"use strict"; commented out the result is window


