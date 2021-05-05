"use strict";
/*eslint-disable*/
/**
 * Let L be a List of objects colored either red, green, or blue. Design an in-place
algorithm sortRBG(L) that places all red objects in list L before the blue colored objects, 
and all the blue objects before the green objects. Thus the resulting List will have all the 
red objects followed by the blue objects, followed by the green objects. Hint: use the 
method swapElements to move the elements around in the List. To receive full credit, 
you must use positions for traversal, e.g., first, last, after, before, swapElements, etc. 
which is necessary to make it in-place. 
 * @param {List} L 
 */
function sortRB(L) {
    let nextRed = L.first();
    while (!L.isLast(nextRed) && nextRed.element() === Red) {
        newRed = L.after(nextRed);

    }
    let p = nextRed
    while (!L.isLast(p)) {
        if (p.element() === Red) {
            L.swapElements(p, nextRed)
            nextRed = L.after(nextRed);
        }
    }
    p = L.after(p)
}
function swapElements(p, nextRed) {
    let temp = nextRed
    nextRed = p.element()
    p.element() = temp;
    return temp;
}