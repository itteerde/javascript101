import { Dice } from "./Dice.mjs";

let a1 = [];

for (let i = 0; i < 1000000; i++) {
    a1.push(Dice.roll(2, 12));
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


let histogram2 = new Array(24);
for (let i = 0; i < histogram2.length; i++) {
    histogram2[i] = 0;
}

for (let i = 0; i < a1.length; i++) {
    histogram2[a1[i] - 1]++;
}

console.log(histogram);
console.log(histogram2);