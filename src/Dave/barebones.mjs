if (canvas.tokens.controlled.length !== 1) {
    ui.notifications.warn("This macro only works when exactly a single token is selected.", { permanent: true });
    return;
}

// prepare HTML for the dialog
let dialogContent = `<label for="tiers">Choose a Tier:</label>

<select name="tier" id="tiers">
  <option value="1">Tier 1</option>
  <option value="2">Tier 2</option>
  <option value="3">Tier 3</option>
  <option value="4">Tier 4</option>
</select>`

const response = await foundry.applications.api.DialogV2.wait({
    window: { title: "Choose Tier" },
    content: dialogContent,
    buttons: [{
        action: "choose",
        label: "Choose Tier",
        default: true,
        callback: (event, button, dialog) => new foundry.applications.ux.FormDataExtended(button.form).object // makes available the named (name) html elements
    }]
});
console.log({ response: response });

let hasBareBones = canvas.tokens.controlled[0].actor.items.filter(item => item.name === 'Bare Bones' && item.type === 'armor');

if (response.tier === '1') {
    hasBareBones.forEach(bareBones => {
        bareBones.update({ "system.tier": 1, "system.baseThresholds": { major: 9, severe: 19 } });
    });
}

if (response.tier === '2') {
    hasBareBones.forEach(bareBones => {
        bareBones.update({ "system.tier": 2, "system.baseThresholds": { major: 11, severe: 24 } });
    });
}

if (response.tier === '3') {
    hasBareBones.forEach(bareBones => {
        bareBones.update({ "system.tier": 3, "system.baseThresholds": { major: 13, severe: 31 } });
    });
}

if (response.tier === '4') {
    hasBareBones.forEach(bareBones => {
        bareBones.update({ "system.tier": 4, "system.baseThresholds": { major: 15, severe: 38 } });
    });
}