"use strict";
/*eslint-disable*/
const Tree = require('./MinHeap.js');
const Pair = require('./Item.js');

class PriorityQueue {
    constructor(initSize = 20, compare = Pair.compareItems) {
        this._heap = new Tree.MinHeap(compare, initSize);
    }
    insertItem(key, value) { // returns the Position containing new Item
        let newItem = new Pair.Item(key, value);
        return this._heap.insert(newItem);
    }
    removeMin() {
        let item = this._heap.removeMin();
        return item.value();
    }
    minKey() {
        let item = this._heap.minimum();
        return item.key();
    }
    minElement() {
        let item = this._heap.minimum();
        return item.value();
    }
    size() {
        return this._heap.size();
    }
    isEmpty() {
        return this._heap.isEmpty();
    }
    numComparisons() {
        return this._heap.numComparisons();
    }
    numSwaps() {
        return this._heap.numSwaps();
    }
    toString() {
        return this._heap.toString();
    }
}
let q = new PriorityQueue();
q.insertItem(1, 2)
q.insertItem(3, 5)
q.insertItem(5, 6)
q.insertItem(6, 7)
console.log(q);

exports.PriorityQueue = PriorityQueue;