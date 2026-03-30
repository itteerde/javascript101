import { CheckSolution } from "./CheckSolution.mjs";

/**
 * Sum Square Difference
 * 
 * Should be very easy.
 * 
 * https://projecteuler.net/problem=6
 */

let sumOne = 0;
let sumTwo = 0;

for (let n = 1; n <= 100; n++) {
    sumOne = sumOne + n;
    sumTwo = sumTwo + Math.pow(n, 2);
}

answer = Math.pow(sumOne, 2) - sumTwo;

let solution = answer; // put the solution (answer) here.

console.log(CheckSolution.check(6, solution));