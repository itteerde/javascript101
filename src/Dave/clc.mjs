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

function runCountdown() {
    let attack = 3;
    let damage = Dice.rollDiceTotal([{ numberOfSides: 10, numberOfDice: 2 }]) + 3;
    let monsterDifficulty = 15;
    let monsterHitPoints = 0;
    let monsterMajorThreshold = 12;
    let monsterSeverThreshold = 20;
    let counter = 0

    while (monsterHitPoints =< 6) {
        let hope = Dice.rollDiceTotal([{ numberOfSide: 12, numberOfDice: 1 }])
        let fear = Dice.rollDiceTotal([{ numberOfSide: 12, numberOfDice: 1 }])
        if (hope + fear >= monsterDifficulty) {
            if damage < monsterMajorThreshold {
                monsterHitPoints = monsterHitPoints + 1
            }
            if damage >= monsterMajorThreshold && damage < monsterSeverThreshold {
                monsterHitPoints = monsterHitPoints + 2
            }
            if damage > monsterSeverThreshold {
                monsterHitPoints = monsterHitPoints + 3
            }
            counter = counter + 1
        }
    }
}