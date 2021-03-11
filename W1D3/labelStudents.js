/*
  Write a program that reads from the keyboard a student's name and number of completed
      credits and then outputs the student's name and label on following rules:
      a. "Freshman" if 0<credits<30
      b. "Sophomore" if 30<=credits<60
      c. "Junior" if 60<=credits<90
      d. "Senior" if credits>90*/
const prompt = require("prompt-sync")();
let name = prompt("Enter students name: ")
let numberOfCredit = +prompt("Enter the students credit: ");
let name_of_year;
if (numberOfCredit > 0 && numberOfCredit < 30) {
    name_of_year = "freshman";
} else if (numberOfCredit >= 30 && numberOfCredit < 60) {
    name_of_year = "Sophomore";
} else if (numberOfCredit >= 60 && numberOfCredit < 90) {
    name_of_year = "Junior";

} else if (numberOfCredit >= 90) {
    name_of_year = "Senior";
}
console.log(name + " " + name_of_year);



