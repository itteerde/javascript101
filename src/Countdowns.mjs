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

sampleCountdownLength(eDV, startValue){
    let currentValue = startValue;
    let rolls = 0;
    while (currentValue > 0) {
        rolls++;

    }

    return rolls;
}