if (canvas.tokens.controlled.length !== 1) {
    ui.notifications.warn("This macro only works when exactly a single token is selected.", { permanent: true });
    return;
}

let token = canvas.tokens.controlled[0];
let hasBareBones = canvas.tokens.controlled[0].actor.items.filter(item => item.name === 'Bare Bones' && item.type === 'armor');
//console.log(hasBareBones)
hasBareBones.forEach(async (bareBones) => {
    await bareBones.update({ tier: 2, baseThresholds: { major: 11, severe: 24 } })
});

