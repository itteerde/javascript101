export { Dice }

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
}

