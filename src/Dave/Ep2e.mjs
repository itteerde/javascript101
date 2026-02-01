import { LibEp2e } from '../FVTT/Ep2e.mjs';

let result = LibEp2e.randomInteger(0, 99);

if (LibEp2e.isCritical(result)) {
    console.log(`${result} is pritical.`);
} else {
    console.log(`${result} is not critical.`);
}