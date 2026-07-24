import { DH } from "./DH.mjs";
import { Dice } from "./Dice.mjs";

const samplesize = 1000000;
const eDV = 13;
let sum = 0;

for (let i = 0; i < samplesize; i++) {
    let hope = Dice.getRandomIntInclusive(1, 12);
    let fear = Dice.getRandomIntInclusive(1, 12);

    if (DH.is_critical(hope, fear)) {
        sum += 3;
        continue;
    }

    if (hope > fear && hope + fear >= eDV) {
        sum += 2;
        continue;
    }

    if (hope + fear >= eDV) {
        sum += 1;
    }
}

console.log(sum / samplesize);