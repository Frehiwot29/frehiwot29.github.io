"use strict";
/**
 * The function makeWorker below makes another function and returns it.
 *  That new function can be called from somewhere else.
 * Will it have access to the outer variables from its creation place, 
 * or the invocation place, or both?
 * 
 */
/**
 * 
 * @returns {String} string
 */
function makeWorker() {
    let name = "Pete";
    return function () {
        console.log(name);
    };
}
let name = "John";
// create a function
let work = makeWorker();
// call it
work(); // what will it show?
  /**
 * So, the result is "Pete" here.
 * But if there were no let name in makeWorker(), then the
 * search would go outside and take the global variable as we can see from the chain above.
 * In that case the result would be "John".
 */