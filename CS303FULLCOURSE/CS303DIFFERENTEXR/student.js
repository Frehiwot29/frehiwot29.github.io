"use strict";
/*eslint-disable*/
/**
 *  Create 3 objects, student1, student2, student3
 *  property studentId : s101, s102, s103 respectively
 *  property quiz answers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
 *  push the students into an array, quiz
 *  write a function, gradeQuiz, that takes the quiz array and an array of correct answers, e.g., [3,1,2,4] and 
 *  returns an object that has properties with the names of each studentId and the value of the property will be 
 *  their score on the quiz (one point for each correct answer) expect { s101: 3, s102: 2, s103: 3 }
 */
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
const quizArray = []
quizArray.push(student1);
quizArray.push(student2);
quizArray.push(student3);
function gradeQuez(quizArray, keyArray) {
    let report = {};
    for (const student of quizArray) {
        const score = scoreQuiz(student.quizAnswer, keyArray);
        report[student.studentId] = score;
    }
    return report;
}
function scoreQuiz(stuAnswer, key) {
    let score = 0
    for (let i = 0; i < stuAnswer.length; i++) {
        if (stuAnswer[i] === key[i])
            score++
    }
    return score;;
}
console.log(gradeQuez(quizArray, key));
/*let sum = 0;
for (const result in score) {
    sum += result;
}
return Math.floor(sum / report);
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
function averageScor(grades) {
    let total = 0;
    let count = 0;
    for (const studeId in grades) {
        total += grades[studeId];
        count++;
    }
    const average = total / count;
    return average;
}
const totalScore = gradeReport.s101 + gradeReport.s102 + gradeReport.s103;
console.log(totalScore / 3);
console.log(averageScor(gradeReport));
/**
 * Write a JavaScript function "checkExam" that returns the grade number. The
  function receives two arguments, two arrays:
  The first input array contains the correct answers to an exam
- The second input array is "answers" array and contains student's answers.
- Return the grade number for the array of answers, giving +4 for each correct
  answer,-1 for each incorrect answer
- If the score < 0, return 0.
Example:
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) →6
checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]) →7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) →16
checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) →0

 */
function checkExams(key, answer) {
    let grade = 0;
    for (let i = 0; i < key.length; i++) {
        if (key[i] === answer[i]) {
            grade += 4;
        } else {
            grade += 1;
        }
    }
    return grade;
}
console.log(checkExams(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
