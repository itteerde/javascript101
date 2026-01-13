/**
 * Find the sum of all even numbers from 0-1000000.
 */

import { CheckResults } from "./tools/CheckResults.mjs";


// start of the solution

let result = 0;

for (let n = 0; n <= 1000000; n += 2) {
    result += n;
}

// end of the solution

/**
 * Checking if the claimed solution is correct.
 */
console.log({
    result: result,
    isCorrect: CheckResults.check(1, result)
});