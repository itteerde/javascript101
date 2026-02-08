//the program will start with a field box which must be filled out for the following variables:
//1) player expected attack bonus
//1) player expected damage roll
//1) monster evasion
//1) monster hit points
//1) monster thresholds
class Dice {

    static getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }

    static roll(dice, sides) {
        let res = 0;
        for (let i = 0; i < dice; i++) {
            res += Dice.getRandomIntInclusive(1, sides);
        }
        return res;
    }

    static dN(n) {
        return this.getRandomIntInclusive(1, n);
    }

    /**
     * Rolls a number of dice and returns the total.
     * 
     * @param {Array} dice like [{nuberOfSides: 6, numberOfDice: 2},{nuberOfSides: 20, numberOfDice: 1}] in order to total 2d6+1d20.
     * @returns the total for the roll of multiple dice.
     */
    static rollDiceTotal(dice = [{ numberOfSides: 6, numberOfDice: 0 }]) {
        let total = 0;
        dice.forEach(d => {
            total += this.roll(d.numberOfDice, d.numberOfSides);
        });

        return total;
    }
}

function runCombatLength(attack, monsterDifficulty, monsterHitPointsMax, monsterMajorThreshold, monsterSevereThreshold) {
    let monsterHitPointsCurrent = 0;
    let counter = 0;

    while (monsterHitPointsCurrent <= monsterHitPointsMax) {
        let hope = Dice.rollDiceTotal([{ numberOfSides: 12, numberOfDice: 1 }]);
        let fear = Dice.rollDiceTotal([{ numberOfSides: 12, numberOfDice: 1 }]);
        if (hope + fear + attack >= monsterDifficulty) {
            let damage = Dice.rollDiceTotal([{ numberOfSides: 10, numberOfDice: 2 }]) + 3;
            if (damage < monsterMajorThreshold) {
                monsterHitPointsCurrent = monsterHitPointsCurrent + 1;
            }
            if (damage >= monsterMajorThreshold && damage < monsterSevereThreshold) {
                monsterHitPointsCurrent = monsterHitPointsCurrent + 2;
            }
            if (damage > monsterSevereThreshold) {
                monsterHitPointsCurrent = monsterHitPointsCurrent + 3;
            }
        }
        counter = counter + 1;
    }
    return {
        counter: counter
    };
}
//console.log(runCombatLength(3, 15, 6, 13, 20));

// prepare HTML for the dialog
let dialogContent = `
    <label for="attack"> Player's Attack Bonus :</label>
    <input type="number" id="attack" name="attack" />
    <label for="monsterDifficulty"> Monster's Difficulty :</label>
    <input type="number" id="monsterDifficulty" name="monsterDifficulty" />
    <label for="monsterHitPointsMax"> Monster's Hit Points :</label>
    <input type="number" id="monsterHitPointsMax" name="monsterHitPointsMax" />
    <label for="monsterMajorThreshold"> Monster's Major Threshold :</label>
    <input type="number" id="monsterMajorThreshold" name="monsterMajorThreshold" />
    <label for="monsterSevereThreshold"> Monster's Severe Threshold :</label>
    <input type="number" id="monsterSevereThreshold" name="monsterSevereThreshold" />
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

let data = runCombatLength(response.attack, response.monsterDifficulty, response.monsterHitPointsMax, response.monsterMajorThreshold, response.monsterSevereThreshold)
console.log(data)

// prepare the HTML for the ChatMessage
let chatMessageContent = `
    <table>
    <tr>
        <th style="text-align: start;">Rounds</th>
        <td>${data.counter}</td>
    </tr>
    </table>
`;

ChatMessage.create({ content: chatMessageContent });