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
    return (1 - (1 - pSuccessDuality(eDV)) ** tries);
}

function pFailureinN(tries, eDV) {
    return (1 - (pSuccessDuality(eDV)) ** tries);
}

function pSuccessAll(tries, eDV) {
    return (pSuccessDuality(eDV) ** tries);
}

function pFailureAll(tries, eDV) {
    return (1 - pSuccessDuality(eDV)) ** tries;
}

// prepare HTML for the dialog
let dialogContent = ``;

const response = await foundry.applications.api.DialogV2.wait({
    window: { title: "Probabilities" },
    content: dialogContent,
    buttons: [{
        action: "calculate",
        label: "Calculate!",
        default: true,
        callback: (event, button, dialog) => new foundry.applications.ux.FormDataExtended(button.form).object // makes available the named (name) html elements
    }]
});
console.log({ response: response });



let tries = 5;
let eDV = 13;
console.log({ m: `pSuccessDuality(${eDV})`, v: pSuccessDuality(eDV) });
console.log({ m: `pSuccessinN(${tries},${eDV})`, v: pSuccessinN(tries, eDV) });
console.log({ m: `pFailureinN(${tries},${eDV})`, v: pFailureinN(tries, eDV) });
console.log({ m: `pSuccessAll(${tries},${eDV})`, v: pSuccessAll(tries, eDV) });
console.log({ m: `pFailureAll(${tries}, ${eDV})`, v: pFailureAll(tries, eDV) });

//pSuccessDuality ** tries