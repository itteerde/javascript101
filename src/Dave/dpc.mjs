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
let dialogContent = `
    <label for="tries"> Number of Tries :</label>
    <input type="number" id="tries" name="tries" />
    <label for="eDV"> Effective Difficutly Value :</label>
    <input type="number" id="eDV" name="eDV" />
`;

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

// prepare the HTML for the ChatMessage
let chatMessageContent = `
    <table>
    <tr>
        <th>Single Roll</th>
        <td>${(pSuccessDuality(response.eDV) * 100).toFixed(2)}%</td>
    </tr>
    <tr>
        <th>One Success in Tries</th>
        <td>${(pSuccessinN(response.tries, response.eDV) * 100).toFixed(2)}%</td>
    </tr>
    <tr>
        <th>Failure in Tries</th>
        <td>${(pFailureinN(response.tries, response.eDV) * 100).toFixed(2)}%</td>
    </tr>
    <tr>
        <th>All Success in Tries</th>
        <td>${(pSuccessAll(response.tries, response.eDV) * 100).toFixed(2)}%</td>
    </tr>
    <tr>
        <th>All Failure in Tries</th>
        <td>${(pFailureAll(response.tries, response.eDV) * 100).toFixed(2)}%</td>
    </tr>
    </table>
`;

let tries = response.tries;
let eDV = response.eDV;
console.log({ m: `pSuccessDuality(${eDV})`, v: pSuccessDuality(eDV) });
console.log({ m: `pSuccessinN(${tries},${eDV})`, v: pSuccessinN(tries, eDV) });
console.log({ m: `pFailureinN(${tries},${eDV})`, v: pFailureinN(tries, eDV) });
console.log({ m: `pSuccessAll(${tries},${eDV})`, v: pSuccessAll(tries, eDV) });
console.log({ m: `pFailureAll(${tries}, ${eDV})`, v: pFailureAll(tries, eDV) });

//pSuccessDuality ** tries

ChatMessage.create({ content: chatMessageContent });

/*<table>
  <tr>
    <th>Animals</th>
  </tr>
  <tr>
    <th>Hippopotamus</th>
  </tr>
  <tr>
    <th>Horse</th>
    <td>Mare</td>
  </tr>
  <tr>
    <td>Stallion</td>
  </tr>
  <tr>
    <th>Crocodile</th>
  </tr>
  <tr>
    <th>Chicken</th>
    <td>Hen</td>
  </tr>
  <tr>
    <td>Rooster</td>
  </tr>
</table>*/