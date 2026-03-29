import { CheckSolution } from "./CheckSolution.mjs";

/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * 
 * What is the smallest positive number that is evenly divisible (divisible without remainder) by all the numbers from 1 to 20?
 */

let answer = 0

for (let n = 1; ; n++) {
    let valid = true
    for (let d = 1; d <= 20; d++) {
        if (n % d !== 0) {
            valid = false
            break
        }
    }
    if (valid) {
        answer = n
        break
    }
}

let solution = answer; // put the solution (answer) here.

console.log(CheckSolution.check(5, solution));



//a % b == 0