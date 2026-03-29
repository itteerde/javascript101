
import { CheckSolution } from "./CheckSolution.mjs";

/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91*99.
 * 
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */
let firstNumber = 100
let secondNumber = 100

function isPalindrome(testPalindrome) {
    const s = testPalindrome.toString()
    for (let offset = 0; offset < s.length / 2; offset++) {
        if (s.charAt(offset) !== s.charAt(s.length - (1 + offset))) {
            return false
        }
    }
    return true
}

let largest = 0

for (let a = 100; a < 1000; a++) {
    for (let b = 100; b < 1000; b++) {
        if (isPalindrome(a * b) && (a * b) > largest) {
            largest = a * b
        }
    }
}


let solution = largest; // put the solution (answer) here.

console.log(CheckSolution.check(4, solution));

/*        if (testPalindrome.toString().charAt(0) === testPalindrome.toString().charAt(testPalindrome.toString().length - 1)) {
        }
*/



