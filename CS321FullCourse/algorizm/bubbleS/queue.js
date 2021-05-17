"use strict";
/*eslint-disable*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
let num = new Queue();
num.enqueue(12)
num.enqueue(11)
num.enqueue(13)
num.enqueue(15)
num.enqueue(19)
num.enqueue(20)
console.log(num);
num.dequeue()
num.dequeue()
num.dequeue()
num.dequeue()
num.dequeue()
num.dequeue()
console.log(num);