import { CheckSolution } from "./CheckSolution.mjs";

/**
 * The prime factors of 13195 are 5,7,13,29.
 * 
 * What is the largest prime factor of the number 600851475143?
 */
let n = Math.floor(Math.sqrt(600851475143))

for (n; n > 0; n--) {
    if (600851475143 % n === 0) {
        //let potentialPrime = n;
        let isPrime = true;
        for (let i = Math.floor(Math.sqrt(n)); i > 1; i--) {
            if (n % i === 0) {
                isPrime = false;
                break
            }
        }
        if (isPrime === true) {
            break
        }
    }
}

console.log(n)
let solution = n; // put the solution (answer) here.
console.log(CheckSolution.check(3, solution));