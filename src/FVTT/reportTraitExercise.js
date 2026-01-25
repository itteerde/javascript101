/* game.folders.getName("The Party").contents
game.folders.getName("The Party").contents.forEach(a => console.log(a.name))
ChatMessage.create({ content: "string" })
*/

let chatMessageContent = `<table><tr><th>Name</th><th>Agility</th></tr>`;
game.folders.getName("The Party").contents.filter((character) => character.type === "character").forEach(a => chatMessageContent += `<tr><td>${a.name}</td><td>${a.getRollData().traits.agility.value}</td></tr>`);
chatMessageContent += '</table>';
ChatMessage.create({ content: chatMessageContent });

let dialogContent = `
    <label for="traits">Choose a trait:</label>
    <select name="traits" id="traits">
        <option value="agility">Agility</option>
        <option value="strength">Strength</option>
        <option value="finesse">Finesse</option>
        <option value="instinct">Instinct</option>
        <option value="presence">Presence</option>
        <option value="knowledge">Knowledge</option>
    </select>
`;

/*<label for="cars">Choose a car:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>*/

// https://foundryvtt.com/api/classes/foundry.applications.api.DialogV2.html
const response = await foundry.applications.api.DialogV2.wait({
    window: { title: "Traits" },
    content: dialogContent,
    buttons: [{
        action: "choice",
        label: "Report",
        default: true,
        callback: (event, button, dialog) => new foundry.applications.ux.FormDataExtended(button.form).object // makes available the named (name) html elements
    }]
});
// use for debugging:
console.log(response);


/*
const result = words.filter((word) => word.length > 6);
*/

/*        <table>
            <tr>
                <th>Index</th><th>Key</th><th style="color: darkgreen;">Value</th>
            </tr>
            <tr>
                <td>0</td><td>agi</td><td>Agility</td>
            </tr>
            <tr>
                <td>1</td><td>fin</td><td>Finesse</td>
            </tr>
            <tr>
                <td>2</td><td>str</td><td>Strength</td>
            </tr>
            <tr>
                <td>3</td><td>pre</td><td>Prescense</td>
            </tr>
            <tr>
                <td>4</td><td>ins</td><td>Instinct</td>
            </tr>
            <tr>
                <td>5</td><td>kno</td><td>Knowledge</td>
            </tr>
        </table>

    </body>
</html>*/