/* game.folders.getName("The Party").contents
game.folders.getName("The Party").contents.forEach(a => console.log(a.name))
ChatMessage.create({ content: "string" })
*/

let chatMessageContent = `<table><tr><th>Name</th><th>Agility</th></tr>`;
game.folders.getName("The Party").contents.filter((character) => character.type === "character").forEach(a => chatMessageContent += `<tr><td>${a.name}</td><td>${a.getRollData().traits.agility.value}</td></tr>`);
chatMessageContent += '</table>';
ChatMessage.create({ content: chatMessageContent });

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