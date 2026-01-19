import fs from 'fs';
import { CheckResults } from "./tools/CheckResults.mjs";


const hamlet = (fs.readFileSync('../../data/hamlet.txt', { encoding: 'utf8' }))
    .split(" ")
    .map(e => e.trim())
    .filter(w => w !== '' && !w.match('/^\s+$/'))
    .map(w => w.toLocaleLowerCase())
    .map(w => w.endsWith('.') ? w.slice(0, -1) : w)
    .map(w => w.endsWith(',') ? w.slice(0, -1) : w)
    .map(w => w.endsWith('!') ? w.slice(0, -1) : w)
    .map(w => w.endsWith('?') ? w.slice(0, -1) : w);


/**
 * 
 * @param {String} search_term the search term to search for.
 * @returns Number how many times Hamlet contains the search term.
 */
function solution(search_term) {
}

/**
 * Checking if the claimed solution is correct.
 */
console.log({
    solution: solution('denmark'),
    isCorrect: CheckResults.check(6, solution('denmark'))
});