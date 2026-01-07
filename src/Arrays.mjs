import { roll } from "./Dice.mjs";

let a1 = [];

for (let i = 0; i < 1000000; i++) {
    a1.push(roll(2, 12));
}

console.log("total: " + a1.reduce((acc, cur) => {
    return acc + cur;
}, 0));

console.log("mean: " + a1.reduce((acc, cur) => {
    return acc + cur;
}, 0) / a1.length);

let histogram = new Array(24);
for (let i = 0; i < histogram.length; i++) {
    histogram[i] = 0;
}

for (const e of a1) {
    histogram[e - 1]++;
}

console.log(histogram);