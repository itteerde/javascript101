import { Dice } from '../Dice.mjs'

let samplesize = 1000000;
let total = 0;

for (let n = 0; n < samplesize; n++) {
    let subtotalA = 0;
    for (let d = 0; d < 27; d++) {
        let roll = Dice.roll(1, 10);
        if (roll > 5) {
            subtotalA += 10;
        }
    }
    let subtotalB = 0;
    for (let d = 0; d < 27; d++) {
        let roll = Dice.roll(1, 10);
        if (roll > 5) {
            subtotalB += 10;
        }
    }

    total += subtotalA > subtotalB ? subtotalA : subtotalB;
}

console.log(`Voidstar: ${total / samplesize}`);


total = 0;

for (let n = 0; n < samplesize; n++) {
    for (let d = 0; d < 30; d++) {
        let roll = Dice.roll(1, 6);
        if (roll > 4) {
            total += 10;
        }
    }
}

console.log(`Tyrant: ${total / samplesize}`);