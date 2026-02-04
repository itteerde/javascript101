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

function pSuccessinN(tries, eDV) {
    return (1 - (1 - pSuccessDuality(eDV)) ** tries)
}

function pFailureinN(tries, eDV) {
    return (1 - (pSuccessDuality(eDV)) ** tries)
}

let tries = 5;
let eDV = 13;
console.log(pSuccessDuality(eDV))
console.log(pSuccessinN(tries, eDV))
console.log(pFailureinN(tries, eDV))

//