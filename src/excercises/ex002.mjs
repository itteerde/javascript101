/**
 * Compute the probability of rolling a critical in Daggerheart.
 */

import { CheckResults } from "./tools/CheckResults.mjs";


// start of the solution

let result = 0;

// end of the solution

/**
 * Checking if the claimed solution is correct.
 */
console.log({
    result: result,
    isCorrect: CheckResults.check(2, result)
});