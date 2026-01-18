/**
 * Write a function pSuccessDuality(eDV) that returns the precise probability to succeed on a Duality Dice Roll with (effective) DV eDV. eDV is enough, no boni needed, as you can just use eDV = DV - bonuses.
 */

import { CheckResults } from "./tools/CheckResults.mjs";


// start of the solution

function pSuccessDuality(eDV) {

    let successes = 0;

    for (let hope = 1; hope <= 12; hope++) {

        for (let fear = 1; fear <= 12; fear++) {

            if (hope + fear >= eDV || hope === fear) {

                successes = successes + 1;

            }

        }

    }

    return (successes / (12 * 12));

}

// end of the solution

for (let eDV = 2; eDV <= 24; eDV++) {

    console.log({ eDV: eDV, p: pSuccessDuality(eDV) })

}

console.log(pSuccessDuality(13))
/**
 * Checking if the claimed solution is correct.
 */
console.log({
    solution: pSuccessDuality(18),
    isCorrect: CheckResults.check(4, pSuccessDuality(18))
});