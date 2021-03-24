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