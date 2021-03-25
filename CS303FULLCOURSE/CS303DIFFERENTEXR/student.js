"use strict";
/*eslint-disable*/
const student1 = {
    studentId: "s101",
    quizAnswer: [1, 1, 2, 4]
}
const student2 = {
    studentId: "s102",
    quizAnswer: [2, 1, 2, 2]
}
const student3 = {
    studentId: "s103",
    quizAnswer: [3, 1, 3, 4]
}
const key = [3, 1, 2, 4]
const quiz = []
quiz.push(student1);
quiz.push(student2);
quiz.push(student3);
function gradeQuez(quizArray, keyArray) {
    let report = {};
    for (const student of quizArray) {
        const score = scoreQuiz(student.quizAnswer, keyArray);
        report[student.studentId] = score;
    }
    return report;
}
function scoreQuiz(stuAnswer, key) {
    return 10;
}
console.log(gradeQuez(quiz, key));
let sum=0;
for(const result in score){
sum+=result;
}
return Math.floor(sum/report);
/*let x = 5;
let y = { x };
console.log(y);


function sum(arr){let lot=0; return toString;}
const myexports=sum;
const exportsObj={sum};*/

/**
 * const gradeReport = { s101: 3, s102: 2, s103: 3 };

Write a function, averageScore, that takes the grade report object and returns
 the average score of all the students. Your function should work for any number of students, 
 but if you are not sure how to do that at least make it work for the given 3 students. 
 Hint: to handle any number remember the for .. in slide.
 */
const gradeReport = { s101: 3, s102: 2, s103: 3 };
function averageScor(grades){
    let total=0;
    let count=0;
    for(const studeId in grades){
        total=grades[studeId];
        count++;
    }
    const average=total/count;
    return average;

}
const totalScore=gradeReport.s101+gradeReport.s102+gradeReport.s103;
console.log(totalScore/3);
console.log(averageScor(gradeReport));