import { CheckResults } from "./tools/CheckResults.mjs";


/**
 * 
 * @param {Array} array An array of numbers.
 * @returns The sum of all numbers in the array, that are divisible by 7.
 */
function solution(array) {
}

/**
 * Checking if the claimed solution is correct.
 */
console.log({
    solution: solution([3647, 926, 267, 1289, 2892, 126372, 28932, 1938237, 98132, 1728391, 1279823, 8920832, 1278991, 182309, 128739, 19283902, 918238, 192730, 1273982, 109009, 1827389, 16372, 2893728, 823902, 271892, 29320, 923918, 2938192, 2983923, 2938923]),
    isCorrect: CheckResults.check(5, solution([3647, 926, 267, 1289, 2892, 126372, 28932, 1938237, 98132, 1728391, 1279823, 8920832, 1278991, 182309, 128739, 19283902, 918238, 192730, 1273982, 109009, 1827389, 16372, 2893728, 823902, 271892, 29320, 923918, 2938192, 2983923, 2938923]))
});