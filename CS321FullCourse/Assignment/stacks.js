"use strict";
/*eslint-disable*/
class stack {
    constructor() {
        let stack1 = new stack()
        let stack2 = new stack()
    }
    enqueue(ele) {
        stack1.push(ele);
    }
    dequeue() {
        if (stack1.isEmpty()) {
            while (!stack1.isEmpty()) {
                stack1.push(stack2.pop())
            }
        }
        if (stack1.isEmpty()) {
            throw a
        }
        return stack2.pop();
    }
}




