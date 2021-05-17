"use strict";
/*eslint-disable*/
/**
 * C-4.11 
 * Suppose we are given an n-element sequence S such that each element in S 
 * represents a different vote in an election, where each vote is given as an integer 
 * representing the ID of the chosen candidate. Without making any assumptions about 
 * who is running or even how many candidates there are, design an efficient algorithm to 
 * see who wins the election S represents, assuming the candidate with the most votes 
 * wins.
 */
const { Sequence } = require('./Sequence.js');
function electionResult(seq) {
    let v = seq.first()//1
    let count = 0;//1
    let eachCount = 0;//1
    let secondCount = 0//1
    let firstWinner = v;//1
    let secondWinner = v;//1
    let result = [];//1
    while (!seq.isLast(v)) {//n
        eachCount = countVote(seq, v)//n*n
        if (eachCount !== count) {//n
            if (eachCount > count) {//n/2
                secondCount = count;//n/2
                secondWinner = firstWinner;//n/2
                count = eachCount;//n/2
                firstWinner = v//n/2
            } else if (eachCount > secondCount) {//n/2
                secondCount = eachCount;//n/2
                secondWinner = v;//n/2
            }
        }
        v = seq.after(v)//n 
    }
    eachCount = countVote(seq, v)//1
    if (eachCount !== count) {//1
        if (eachCount > count) {//1
            secondCount = count;
            secondWinner = firstWinner;
            count = eachCount;
            firstWinner = v
        } else if (eachCount > secondCount) {
            secondCount = eachCount;
            secondWinner = v;
        }
    }
    result = [];
    result.push(firstWinner)//1
    result.push(secondWinner)//1
    return result;//1
}
//O(n^2)
function countVote(seq, v) {//
    let p = seq.first();//1
    let count = 0;//1
    while (!seq.isLast(p)) {//n
        if (v.element() === p.element())//n
            count++; //n
        p = seq.after(p)//n
    }
    if (v.element() === p.element())//1
        count++; //1
    return count;//1
}
let list1 = new Sequence();//list of candidates and number of votes
list1.insertFirst("Simon");
list1.insertFirst("Kalab");
list1.insertFirst("Simon");
list1.insertFirst("Kalab");
list1.insertFirst("Simon");
list1.insertFirst("Simon");
list1.insertFirst("Simon");
list1.insertFirst("Aster");
list1.insertFirst("Aster");
list1.insertFirst("Aster");
list1.insertFirst("Adonay");//6
list1.insertFirst("Adonay");//5
list1.insertFirst("Adonay");//4
list1.insertFirst("Adonay");//3
list1.insertFirst("Adonay");//2
list1.insertFirst("Adonay");//1
list1.insertFirst("Adonay");//7
list1.insertFirst("Frehiwot");
list1.insertFirst("Frehiwot");
console.log(electionResult(list1))