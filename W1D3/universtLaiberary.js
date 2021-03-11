/**
 * A university library that loans book to students, faculty, and the public has a written policy that
    determines how long someone may borrow a book before it is due, which is shown on the table
    below. Write a defining table and JavaScript program that determines how long a person may
    borrow a book.
    Status    Number of books Overdue     Loan duration in weeks
    Student      0                               6
                 fewer than 3                    4
                 3 or more                       2
    Faculty      0                              12
                 fewer than 3                   10
                 3 or more                       8
    Other        0                               4
                 fewer than 3                    3
                 3 or more                       2

 *
*/
const prompt = require("prompt-sync")();
let librarian = prompt("Enter the status of the borrower: ");
let number_book = prompt("Enter number of overdue book in the last year: ");
let loanDurationInWeek;
if (librarian === "student") {
    if (number_book === 0) {
        loanDurationInWeek = 6;

    }
    if (number_book < 3) {
        loanDurationInWeek = 4;
    } if (number_book >= 3) {
        loanDurationInWeek = 2;

    }

} else if (librarian === "faculty") {
    if (number_book === 0) {
        loanDurationInWeek = 12;

    }
    if (number_book < 3) {
        loanDurationInWeek = 10;
    } if (number_book >= 3) {
        loanDurationInWeek = 8;

    }

} else {
    if (number_book === 0) {
        loanDurationInWeek = 4;

    }
    if (number_book < 3) {
        loanDurationInWeek = 3;
    } if (number_book >= 3) {
        loanDurationInWeek = 2;

    }
}
console.log("person may borrow a book:  " + loanDurationInWeek);