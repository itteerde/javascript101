import { Dice } from "./Dice.mjs";


// sometimes it is the easiest way just to simulate a large number of times and trust the stochastics of large numbers to get you close enough.

const sample_size = 1000000;
const rolls = new Array(25).fill(0);

for (let i = 0; i < sample_size; i++) {
    const roll = Dice.roll(2, 12);
    rolls[roll]++;
}

for (let i = 0; i < rolls.length; i++) {
    rolls[i] /= sample_size;
}

let output = {};
for (let i = 1; i < rolls.length; i++) {
    output[i] = rolls[i];
}

console.log(output);



// ... but often it is really simple to just run through all possible cases and do the bookkeeping. (note that it is also worth looking at stochastics/combinatorics and just write down the closed form formula if there is one)

output = {};
for (let h = 1; h <= 12; h++) {
    for (let f = 1; f <= 12; f++) {
        if (output[h + f] === undefined) {
            output[h + f] = 1 / 144;
        } else {
            output[h + f] += 1 / 144;
        }
    }
}

console.log(output);

/*
// https://foundryvtt.com/api/
// https://foundryvtt.com/api/classes/foundry.documents.ChatMessage.html
// https://foundryvtt.com/api/classes/foundry.documents.ChatMessage.html#create
ChatMessage.create({
    content: `
    <div>
        <div style="background-color: black; color: #7CFC00; font-family: monospace;">Overwatch, Active Defender</div>
        <div><img src="https://i.gifer.com/JT72.gif" style="display: block; margin-left: auto; margin-right: auto;"/></div>
    </div>
    ` })
    */