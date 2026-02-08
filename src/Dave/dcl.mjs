function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function d12() {
    return getRandomIntInclusive(1, 12);
}

function runCountdown(countdown, eDV) {
    let counter = 0;
    let criticals = 0;
    let successWHope = 0;
    let successWFear = 0;
    let failureWHope = 0;
    let failureWFear = 0;
    while (countdown > 0) {
        let hope = d12();
        let fear = d12();
        if (hope === fear) {
            countdown = countdown - 3;
            criticals = criticals + 1;
        }
        if (hope + fear >= eDV && hope > fear) {
            countdown = countdown - 2;
            successWHope = successWHope + 1
        }
        if (hope + fear >= eDV && fear > hope) {
            countdown = countdown - 1;
            successWFear = successWFear + 1;
        }
        if (hope + fear < eDV && hope > fear) {
            failureWHope = failureWHope + 1;
        }
        if (hope + fear < eDV && hope < fear) {
            countdown = countdown + 1;
            failureWFear = failureWFear + 1;
        }
        counter = counter + 1
    }
    return {
        rolls: counter,
        criticals: criticals,
        successWHope: successWHope,
        failureWHope: failureWHope,
        successWFear: successWFear,
        failureWFear: failureWFear
    };
}

function countdownAverage(countdown, eDV, samplesize) {

    let bins = 100;

    let data = {
        rolls: new Array(bins).fill(0),
        criticals: new Array(bins).fill(0),
        successWHope: new Array(bins).fill(0),
        failureWHope: new Array(bins).fill(0),
        successWFear: new Array(bins).fill(0),
        failureWFear: new Array(bins).fill(0)
    };

    for (let i = 0; i < samplesize; i++) {
        let result = runCountdown(countdown, eDV);

        result.rolls < bins ? data.rolls[result.rolls]++ : data.rolls[0]++;
        result.criticals < bins ? data.criticals[result.criticals]++ : data.criticals[0]++;
        result.successWHope < bins ? data.successWHope[result.successWHope]++ : data.successWHope[0]++;
        result.failureWHope < bins ? data.failureWHope[result.failureWHope]++ : data.failureWHope[0]++;
        result.successWFear < bins ? data.successWFear[result.successWFear]++ : data.successWFear[0]++;
        result.failureWFear < bins ? data.failureWFear[result.failureWFear]++ : data.failureWFear[0]++;

    }

    // aggregate bins?

    for (let n = 0; n < bins; n++) {
        data.rolls[n] /= samplesize;
        data.criticals[n] /= samplesize;
        data.successWHope[n] /= samplesize;
        data.failureWHope[n] /= samplesize;
        data.successWFear[n] /= samplesize;
        data.failureWFear[n] /= samplesize;
    }



    return data;
}

console.log(countdownAverage(12, 13, 10000));

/*

// prepare HTML for the dialog
let dialogContent = `
    <label for="countdown"> Countdown Length :</label>
    <input type="number" id="countdown" name="countdown" />
    <label for="eDV"> Effective Difficutly Value :</label>
    <input type="number" id="eDV" name="eDV" />
    <label for="samplesize"> Sample Size :</label>
    <input type="number" id="samplesize" name="samplesize" />
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

if (response.samplesize > 1000000) {
    ui.notifications.error(`Sample size must not be greater than a million, was ${response.samplesize}`, { permanent: true });
    return
}

let data = countdownAverage(response.countdown, response.eDV, response.samplesize)
// prepare the HTML for the ChatMessage
let chatMessageContent = `
    <table>
        <th>Rolls</th>
        <td>${Math.round(data.rolls)}</td>
    </tr>
    <tr>
        <th>Criticals</th>
        <td>${Math.round(data.criticals)}</td>
    </tr>
    <tr>
        <th>Successes with Hope</th>
        <td>${Math.round(data.successWHope)}</td>
    </tr>
    <tr>
        <th>Failures with Hope</th>
        <td>${Math.round(data.failureWHope)}</td>
    </tr>
        <tr>
        <th>Successes with Fear</th>
        <td>${Math.round(data.successWFear)}</td>
    </tr>
    <tr>
        <th>Failures with Fear</th>
        <td>${Math.round(data.failureWFear)}</td>
    </tr>
    </table>
`;

ChatMessage.create({ content: chatMessageContent });

*/