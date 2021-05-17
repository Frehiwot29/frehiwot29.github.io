"use strict";
/*eslint-disable*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
        //return temp.val;
    }
    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp;
    }
}
let mystack = new Stack()
console.log(mystack.push("123"));
console.log(mystack.push("523"));
console.log(mystack.push("423"));
console.log(mystack.push("323"));
// console.log(mystack.pop());
// console.log(mystack.pop());
// console.log(mystack.pop());
// console.log(mystack.pop());
// console.log(mystack.pop());


