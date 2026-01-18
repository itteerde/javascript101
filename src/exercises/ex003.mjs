/**
 * Fill the map with the precise expected values (probabilities) for a Duality Roll in Daggerheart.
 */

import { CheckResults } from "./tools/CheckResults.mjs";


// start of the solution

let result = new Map();

/**
 *  You cannot roll a 1 with two dice being totalled, so only set 2..24(and 0 is not the correct value for 2). You probobly want to delete this line and set for 2..24 in some loop.
 */
result.set(2, 0);

// end of the solution

/**
 * Checking if the claimed solution is correct.
 */
console.log({
    result: result,
    isCorrect: CheckResults.check(3, result)
});