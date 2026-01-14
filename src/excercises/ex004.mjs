/**
 * Write a function pSuccessDuality(eDV) that returns the precise probability to succeed on a Duality Dice Roll with (effective) DV eDV. eDV is enough, no boni needed, as you can just use eDV = DV - bonuses.
 */

import { CheckResults } from "./tools/CheckResults.mjs";


// start of the solution

function pSuccessDuality(eDV) {
}

// end of the solution

/**
 * Checking if the claimed solution is correct.
 */
console.log({
    result: pSuccessDuality(18),
    isCorrect: CheckResults.check(4, pSuccessDuality(18))
});