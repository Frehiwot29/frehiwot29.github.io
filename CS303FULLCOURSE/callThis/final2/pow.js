"use strict";
/*function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
console.log(pow(2, 3));
function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
console.log(pow(2, 3));*/
let company = {
    sales: [{ name: "John", salary: 1000 }, { name: "Alice", salary: 600 }],
    development: {
        sites: [{ name: "Peter", salary: 2000 }, { name: "Alex", salary: 1800 }], //subdepartments
        internals: [{ name: "Jack", salary: 1300 }]
    }
};
console.log(company.sales[0].name);//john
console.log(company.sales[1].salary);//1000
console.log(company.development.sites[0].salary);//2000
console.log(company.development.sites[0]);
/**
 * 
 * @param {Number} sales to
 * @return {Number} num
 */
function sumSalary(sales) {
    if (Array.isArray(sales)) {//base
        return sales.reduce((pre, curre) => pre + curre.salary, 0);
    } else {
        let sum = 0;
        for (let sub of Object.values(sales)) {//recursive
            sum += sumSalary(sub);
        }
        return sum;
    }
}
console.log(sumSalary(company));
//linked list
let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};
let node4 = {
    name: "label",
    value: "Name",
    children: null
};
let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
};
/**
 * 
 * @param {Object} root the
 * @param {Object} result the
 * @returns {Object} result
 */
function display(root, result = []) {
    result.push(root.name + " " + root.value);
    if (root.children !== null) {
        for (let node of root.children) {
            display(node, result);
        }
    }
    return result;
}
console.log(display(node1));
// finding max and min
/**
 * 
 * @returns {Number} number
 */
/*function findmax() {
    let max = -Infinity;
    for (let i = 0; i < arrgument.length; i++) {
        if (arrgument[i] > max) {
            max = arrgument[i];
        }
    }
    return max;

}
console.log(findmax(2, 3, 4, 5, 6));*/

// sum of number
/**
 * 
 * @param {Number} num num
 * @return {number} num 
 */
function sumTo(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumTo(100));

//factorial
/**
 * 
 * @param {Number} num the
 * @returns{number} num 
 */
function factorial(num) {
    if (num === 1 || num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
console.log(factorial(0));

//fibonacci
/**
 * 
 * @param {Number} num to find
 * @return {Number} num 
 */
function fibo(num) {
    if (num <= 1) {
        return num;
    } else {
        return fibo(num - 1) + fibo(num - 2);
    }
}
console.log(fibo(7));
//find the reverse of a given linked list
let list = {
    value: 1, next: {
        value: 2, next: {
            value: 3, next: {
                value: 4, next: null
            }
        }
    }
};
/**
 * 
 * @param {Object} list data
 * @return{Object} list of 
 */
function printReverseList(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverseList(list);
//console.log(list);

//printing list 
let list1 = {
    value: 1, next: {
        value: 2, next: {
            value: 3, next: {
                value: 4, next: null
            }
        }
    }
};
/**
 * 
 * @param {Object} list1 value
 * @returns {Object} list  
 */
function printList(list1) {
    console.log(list1.value);
    if (list1.next) {
        printList(list1.next);
    }
}
printList(list1);