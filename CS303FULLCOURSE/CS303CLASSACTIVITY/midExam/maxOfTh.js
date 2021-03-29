"use strict";
/*eslint-disable*/
/*function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;

    } else if (b > a && b > c) {
        return b;

    } else if (c > a && c > b) {
        return c;
    }

}
console.log(maxOfThree(6, 9, 3));
function product(arr) {
    //let sum = 0;
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        //sum += arr[i];
        product *= arr[i];

    }
    // return sum;
    return product;

}
//console.log(sum([1, 2, 3, 4, 5]));
console.log(product([1, 2, 3, 4, 5]));
//longest string
function findLongestWords(arr) {
    let longest = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i];
        }
    }
    return longest;

}
let num = ["AdonayF", "SimonF", "KalabF", "AsterF", "FrehiwotK"];
console.log(findLongestWords(num));
//reverse of array
function reverseArray(arr) {
    let newArray = [];
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray[j] = arr[i];
        j++;
    }
    return newArray;

}
console.log(reverseArray([1, 2, 3, 4, 5]));
let num1 = ["AdonayF", "SimonF", "KalabF", "AsterF", "FrehiwotK"];
console.log(reverseArray(num1));
//scoreExam
function scoreExam(arr1, arr2) {
    let score = [];
    for (let i = 0; i < arr1.length; i++) {
        let count = 0;
        for (let j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] === arr2[j])
                count++;

        }

        score.push(count);
    }
    return score;
}
let num2 = [[1, 1, 2], [2, 1, 2], [3, 1, 3]];
let num3 = [3, 1, 2];
console.log(scoreExam(num2, num3));
//object
let use = {
    name: "adonay",
    age: 5,
    id: 2101
}
for (let key in use) {
    console.log(key);
    console.log(use[key]);

}
//----------------->
function sayHi() {
    console.log(this);
}
console.log(sayHi())
//constructer
function User(name) {
    this.name = "Adonay";
    this.age = 5;
    this.id = 2101;
}
let user = new User("Jack");
console.log(user.name);
console.log(user.age);
console.log(user.id);
//---------> adding property of object
let salaries = {
    john: 1000,
    Ann: 160,
    pete: 130
}
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);
//object multiplication
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] === 'number') {
            menu[key] *= 2;
        }
    }
}
console.log(multiplyNumeric(menu));
//from final exam
function makeContacts() {
    let contacts = [];
    function keepContacts(name) {
        let aContact = contacts.find(findName);
        if (aContact !== undefined) {
            return aContact.phone;
        } else {
            let newPhone = prompt("Please enter phone number: ");
            let newContact = {
                name: name,
                phone: newPhone
            };
            contacts.push(newContact);
        }

        function findName(contact) {
            if (contact.name === name) {
                return true;
            } else {
                return false;
            }
        }
    }
    return keepContacts;
}
// test it
const myContacts = makeContacts();
myContacts("Bill");
myContacts("Bob");
console.log("should find number for bill: " + myContacts("Bill"));*/
//mid
/*function hi(name) {
    return 'Hi ' + name;
}
let goodBye = function () {
    return 'Good Bye';
}
console.log(hi('Developer', 'Welcome'));//hi developer
console.log(goodBye('Developer'));//Good by
console.log(goodBye);//function
console.log(goodBye());//goodBay*/
/**
 *  Write a function named sortThis that takes three input parameters and returns an array 
    that has them sorted in ascending order.
    e.g. calling sortThis(5, 2, 3) should return [2, 3, 5]
 */
function sortThis(a, b, c) {
    let result = [];
    if (a > b && a > c) {
        result[2] = a;
        if (b > c) {
            result[1] = b;
            result[0] = c;
        } else {
            result[1] = c;
            result[0] = b;
        }

    } else if (b > a && b > c) {
        result[2] = b;
        if (a > c) {
            result[1] = a;
            result[0] = c;
        } else {
            result[1] = c;
            result[0] = a;
        }
    } else if (c > a && c > b) {
        result[2] = c;
        if (b > a) {
            result[1] = b;
            result[0] = a;
        } else {
            result[1] = a;
            result[0] = b;
        }

    }
    return result;
}
console.log(sortThis(5, 2, 3));

/**
 * Write a function named somethingOdd that takes an array of numbers as input and
 * returns the product of all the array values at the odd indices.
 */
function somethingOdd(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            product = product * arr[i];
        }
    }
    return product;
}
console.log(somethingOdd([1, 2, 3, 4, 5, 6, 7]));

/**
 * a) Create a student object with the properties first name and last name. 
 * b) Create an array and add 2 student objects. 
 * c) Use the forEach method to print out all the values and indices. Use function 
 * declarations to declare any functions in the code.
 */
let student1 = {
    fName: "Adonay",
    lName: "Kassa",
    age: 5

}
let student2 = {
    fName: "Simon",
    lName: "Kassa",
    age: 4
}
let arr = [student1, student2];
arr.forEach(function (value, index) {
    console.log("FName: " + value.fName + " lName: " + value.lName + " index: " + index);
});

/**
 *  Write a function ‘multiplyAll’ which takes an array as a parameter and returns the 
 * product of all the values in this array. You have to use the reduce method. Include an initial 
 * value. Use function declarations for all functions you write.
 */
function multipleAll(arr) {

    return arr.reduce((result, value) => result * value, 1);

}
console.log(multipleAll([1, 2, 3, 4]));
/**
 * Write a function ‘thisProgramIsTheBest’ which takes 3 parameters. First two
 * parameters are objects that have property ‘color’ and the last one is a function, “cbFun”. If
 * the color properties are equal, then return “Same color!”, otherwise call the cbFun function
 * with the input parameters as arguments, and then return “Different colors”.
 */
function thisProgramIsTheBest(obj1, obj2, cbfun) {
    if (obj1.color === obj2.color) {
        return "same Color";
    } else {
        cbfun(obj1, obj2)
        return "Different colores"
    }
}






