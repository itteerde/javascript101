import { CheckSolution } from "./CheckSolution.mjs";
import fs from 'node:fs/promises';

/**
 * https://projecteuler.net/problem=67
 */

/**
 * Ignore this, just providing the data to process. Note however, if you get an error loading the data, because the file does not exist, it needs to be called from the repositories root directory in order to make the relative file path work.
 */
async function importNumbers() {
    try {
        let data = await fs.readFile('./src/euler/data/0067_triangle.txt', { encoding: 'utf8' });
        data = data.split('\n');
        for (let i = 0; i < data.length; i++) {
            data[i] = data[i].split(' ');
            for (let j = 0; j < data[i].length; j++) {
                data[i][j] = Number.parseInt(data[i][j]);
            }
        }
        return data;
    } catch (err) {
        console.error(err);
    }
}

let triangle = await importNumbers(); // a two dimensional array representing the triangle, containing the numbers.

let solution = undefined; // put the solution (answer) here.

console.log(CheckSolution.check(67, solution));