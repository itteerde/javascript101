let targeted;
if (game.user.targets.entries().next().value) {
    targeted = game.user.targets.entries().next().value[0].actor;
}
let folder = game.folders.getName('_Player Characters');

let dialogContent = `
    <fieldset>
        <label for="actor">Actor:</label>
        <select name="actor_id" id="actor">
`;

if (targeted) {
    dialogContent += `
            <option value="${targeted.id}">${targeted.name}</option>
    `;
}

folder.contents.forEach(a => {
    dialogContent += `
            <option value="${a.id}">${a.name}</option>
    `;
});

dialogContent += `
            <option value="party">Cell (whole Party)</option>
        </select >
    </fieldset >
`;

let promptContent = ``;

if (actor.getFlag('ep2e', 'flags.ep2e.biological?.system?.physicalHealth')) {

}

const response = await foundry.applications.api.DialogV2.wait({
    window: { title: "Health" },
    content: dialogContent,
    buttons: [{
        action: "ok",
        label: "ok",
        default: true,
        callback: (event, button, dialog) => new foundry.applications.ux.FormDataExtended(button.form).object // makes available the named (name) html elements
    }]
});
console.log({ response: response });