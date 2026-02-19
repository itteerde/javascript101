import { CheckSolution } from "./CheckSolution.mjs";

/**
 * The sum of all natural numbers below 10, that are (integer) multiples of 3 or 5, we get 23.
 * 
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

let result = 0;

for (let n = 1; n < 1000; n++) {
    if (n % 3 === 0 || n % 5 === 0) {
        result += n;
    };
}

let solution = result; // put the solution (answer) here.

console.log(CheckSolution.check(1, solution));






//7 % 4 = 3
//10 % 10 = 0
// 8 % 6 = 2
//10 % 5 = 0
// 7 % 2 = 1