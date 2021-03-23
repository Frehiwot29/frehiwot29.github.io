"use strict";
///*eslint-disable*/
/**
 * . Write a function, scoreExams, that takes an array of arrays of student answers and an array of
the correct answers. It should compare each student’s answers against the correct answers and
return an array holding the scores of each student. The score for each student is a count of the
number of correct answers (i.e., matches with the key of correct answers). For example
const studentAnswers = [[1, 1, 2], [2, 1, 2], [3, 1, 3]];
const correctAnswers = [3, 1, 2];
scoreExams(studentAnswers, correctAnswers)); --> [2, 2, 2]
 */
/**
 * 
 * @param {Array} arr1 answer of student
 * @param {Array} arr2 correct answer
 * @return {Array} arr score exam answer 
 */
function scoreExams(arr1, arr2) {
    let correctAnswer = [];
    for (let i = 0; i < arr1.length; i++) {
        let count = 0;
        for (let j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] === arr2[j]) {
                count++;
            }
        }
        correctAnswer.push(count);
    }
    return correctAnswer;
}
const studentAnswers = [[1, 1, 2], [2, 1, 2], [3, 1, 3]];
const correctAnswers = [3, 1, 2];
console.log(scoreExams(studentAnswers, correctAnswers));
