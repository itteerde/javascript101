function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function d12() {
    return getRandomIntInclusive(1, 12);
}

//User picks a Countdown Length and an eDV. (Done)
//Program will roll 2d12 multiple times  (Done)
//Criticals will reduce coundown length by 3 (Done)
//Successes with hope will reduce coundown length by 2 (Done)
//Successes with fear will reudce coundown length by 1 (Done)
//Failures with hope will have no effect on the coundown length (Done)
//Failures with fear will increase the coundown length by 1 (Done)
//One the coundown reaches 0, tracking the process will conclude, and results must be returned
//The results should include: 
//      1) how many tries it took to complete the process
//      2) how many criticals were rolled during the process
//      3) how many failures with fear were rolled during the process
//      4) how many times a roll generated Hope during the process
//      5) how many times a roll generated Fear during the process) 
//The progream will gather this data for a number of tries chosen by a user and then provide the average numbers given the number of tries chosen.

let countdown = 12;
let eDV = 13;

function runCountdown() {
    let counter = 0;
    while (countdown > 0) {
        let hope = d12();
        let fear = d12();
        if (hope === fear) { countdown = countdown - 3 }
        if (hope + fear >= eDV && hope >= fear) { countdown = countdown - 2 }
        if (hope + fear >= eDV && fear > hope) { countdown = countdown - 1 }
        if (hope + fear < eDV && hope < fear) { countdown = countdown + 1 }
        counter = counter + 1
    }
    return {
        rolls: counter,
        criticals: undefined,
        hope: undefined,
        fear: undefined
    };
}

console.log(runCountdown())

//for (let i = 0; i < 1000000; i++) TODO

/* TODO

// prepare HTML for the dialog
let dialogContent = `
    <label for="countdown"> Countdown Length :</label>
    <input type="number" id="countdown" name="countdown" />
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
        <th>Expected Number of Rolls</th>
        <td>${(XXX(response.countdown, response.eDV) * 100).toFixed(2)}%</td>
    </tr>
    <tr>
        <th>Expected Number of Criticals</th>
        <td>${(XXX(response.countdown, response.eDV) * 100).toFixed(2)}%</td>
    </tr>
    <tr>
        <th>Expected Number of Failures with Fear</th>
        <td>${(XXX(response.countdown, response.eDV) * 100).toFixed(2)}%</td>
    </tr>
    <tr>
        <th>Expected Number of Rolls with Hope</th>
        <td>${(XXX(response.countdown, response.eDV) * 100).toFixed(2)}%</td>
    </tr>
        <tr>
        <th>Expected Number of Rolls with Fear</th>
        <td>${(XXX(response.countdown, response.eDV) * 100).toFixed(2)}%</td>
    </tr>
    </table>
`;

let countdown = response.countdown;
let eDV = response.eDV;

ChatMessage.create({ content: chatMessageContent });
`;

TODO */