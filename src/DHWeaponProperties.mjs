import { Dice } from "./Dice.mjs";

const samplesize = 1_000_000;

let sum = 0;
for (let i = 0; i < samplesize; i++) {
    let dice = [Dice.dN(10), Dice.dN(10), Dice.dN(10), Dice.dN(10)];
    dice.sort((a, b) => a - b);
    sum += dice[1] + dice[2] + dice[3];
}

console.log(`Powerful: ${sum / samplesize}`);


sum = 0;
for (let i = 0; i < samplesize; i++) {
    let dice = [Dice.dN(10), Dice.dN(10), Dice.dN(10)];
    if (dice[0] === 10 || dice[1] === 10 || dice[2] === 10) {
        sum += Dice.dN(10);
    }
    sum += dice[0] + dice[1] + dice[2];
}

console.log(`Brutal: ${sum / samplesize}`);