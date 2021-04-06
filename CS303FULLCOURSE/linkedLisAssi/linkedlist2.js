/*eslint-disable */
let LinkedList = {
    head: null,
    createNode: function (d) {
        return {
            data: d,
            next: null,
        };
    },
    /**
    * add method added values to linked list
    * @param {} d is values
    */
    add: function (d) {
        let current,
            newNode = this.createNode(d);
        if (this.head == null) {
            this.head = newNode;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    },
    /**
    * 
    * @param {*} d is values
    * @returns{} return boolean
    */
    remove: function (d) {
        if (this.head.data == d) {
            this.head = this.head.next;
            return true;
        }
        let prev = this.head,
            current = this.head.next;
        while (current.data !== null) {
            if (current.data == d) {
                prev.next = current.next;
                this.size--;
                return true;
            }
            prev = current;
            current = current.next;
        }
        //return 
    },
    print: function () {
        let listValue = [];
        let current = this.head;
        while (current) {
            listValue.push(current.data);
            current = current.next;
        }
        return listValue;
    },
    contained: function (val) {
        if (this.head.data === val) return true;
        else {
            let current = this.head;
            while (current.next !== null) {
                if (current.data === val) return true;
                current = current.next;
            }
            return false;
        }
    },
    getNode: function (val) {
        if (this.head.data === val) return this.head;
        else {
            let current = this.head;
            while (current.next !== null) {
                if (current.data === val) return current;
                current = current.next;
            }
            return null;
        }
    },
    atIndex: function (index) {
        if (index > this.size || index < 0) return null;
        let indexCount = 0;
        if (index === 0) return this.head;
        let current = this.head.next;
        while (indexCount !== index) {
            indexCount++;
            if (index === indexCount) return current;
            current = current.next;
        }
        // return null;
    },
    insertAfter: function (index, val) {
        let newNode = this.createNode(val);
        let tempNode = this.atIndex(index);
        if (tempNode === null) {
            this.head = tempNode;
        } else {
            newNode.next = tempNode;
            tempNode.next = newNode;
        }
    },
};

LinkedList.add(4);
LinkedList.add(1);
LinkedList.add(7);
LinkedList.add(9);
LinkedList.add(12);
console.log(LinkedList.head);
console.log(LinkedList.print());
// console.log(LinkedList.contained(4))
// console.log(LinkedList.contained(14))
// console.log(LinkedList.getNode(7))
// console.log(LinkedList.getIndex(2))
LinkedList.insertAfter(1, 34);
console.log(LinkedList.remove(4));
console.log(LinkedList.remove(89));
console.log(LinkedList.head);