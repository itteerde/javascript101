import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { getRandomIntInclusive, roll } from './Dice.mjs';

const rl = readline.createInterface({ input, output });
const root = {};

do {
    var answer = await rl.question('> ');
    if (answer === '.exit') break;
    try {
        console.log(eval(answer));
    } catch (e) {
        console.error(e);
        console.log("\n.exit to close CLI.");
    }
} while (true);

rl.close();
process.exit();
