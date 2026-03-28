
import { CheckSolution } from "./CheckSolution.mjs";

/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91*99.
 * 
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */
let firstNumber = 100
let secondNumber = 100
let testPalindrome = firstNumber * secondNumber

function isPalindrome(testPalindrome) {
    const s = testPalindrome.toString()
    for (let offset = 0; offset < s.length / 2; offset++) {
        if () {
            //toDo create code that compares the .charAt of the first and last digit, then the inner digit, and so on and so forth until the loop completes, finally setting testPalindrome to true if the charAt's are the same throughout the entire number.
        }
    }
    return true
}

let solution = undefined; // put the solution (answer) here.

console.log(CheckSolution.check(4, solution));

/*        if (testPalindrome.toString().charAt(0) === testPalindrome.toString().charAt(testPalindrome.toString().length - 1)) {
        }
*/



