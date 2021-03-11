/**
 * Write a JavaScript program that gives the user three tries to guess 
 * the correct pin of the account. You set the pin as a constant.
    When correct display “Correct,  welcome back.” When
      incorrect display “Incorrect, try again.”. When run out of tries
   display “Sorry but you have been locked out.”
*/
const prompt = require("prompt-sync")();
let user = prompt("Enter the correct pin number: ");
const pin = "#2101%@";
let i = 1;
let result;
while (i <= 3) {
    if (user === pin) {
        result = "Correct, wellcome back";
        break;

    } else {
        result = "Incorrect, tryagain";
        user = prompt("Enter the correct pin number again please: ");
    }

    result = "Sorry you try more, you have been aleady locked";
    i++;

}
console.log(result);







