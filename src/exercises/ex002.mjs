/**
 * Compute the probability of rolling a critical in Daggerheart.
 */

import { CheckResults } from "./tools/CheckResults.mjs";


// start of the solution

let solution = (1 / 12) * (1 / 12) * 12;

// end of the solution

/**
 * Checking if the claimed solution is correct.
 */
console.log({
    solution: solution,
    isCorrect: CheckResults.check(2, solution)
});