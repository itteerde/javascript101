export { getRandomIntInclusive, roll }

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function roll(dice, sides) {
    let res = 0;
    for (let i = 0; i < dice; i++) {
        res += getRandomIntInclusive(1, sides);
    }
    return res;
}
