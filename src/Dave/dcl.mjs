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

    let data = {
        rolls: 0,
        criticals: 0,
        successWHope: 0,
        failureWHope: 0,
        successWFear: 0,
        failureWFear: 0
    };

    for (let i = 0; i < samplesize; i++) {
        let result = runCountdown(countdown, eDV);

        data.rolls += result.rolls; //same as "data.rolls = data.rolls + result.rolls;""
        data.criticals += result.criticals
        data.successWHope += result.successWHope
        data.failureWHope += result.failureWHope
        data.successWFear += result.successWFear
        data.failureWFear += result.failureWFear

    }

    data.rolls /= samplesize; //same as "data.rolls = data.rolls / samplesize"
    data.criticals /= samplesize
    data.successWHope /= samplesize
    data.failureWHope /= samplesize
    data.successWFear /= samplesize
    data.failureWFear /= samplesize

    return data;
}

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
    ui.notifications.error(`Sample Size must not be greater than a million, was ${response.samplesize}`, { permanent: true });
    return
}

let data = countdownAverage(response.countdown, response.eDV, response.samplesize)
// prepare the HTML for the ChatMessage
let chatMessageContent = `
    <table>
    <tr>
        <th style="text-align: start;">Rolls</th>
        <td>${Math.round(data.rolls)}</td>
    </tr>
    <tr>
        <th style="text-align: start;">Criticals</th>
        <td>${Math.round(data.criticals)}</td>
    </tr>
    <tr>
        <th style="text-align: start;">Successes with Hope</th>
        <td>${Math.round(data.successWHope)}</td>
    </tr>
    <tr>
        <th style="text-align: start;">Failures with Hope</th>
        <td>${Math.round(data.failureWHope)}</td>
    </tr>
        <tr>
        <th style="text-align: start;">Successes with Fear</th>
        <td>${Math.round(data.successWFear)}</td>
    </tr>
    <tr>
        <th style="text-align: start;">Failures with Fear</th>
        <td>${Math.round(data.failureWFear)}</td>
    </tr>
    </table>
`;

ChatMessage.create({ content: chatMessageContent });