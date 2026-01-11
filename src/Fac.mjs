

/**
 * Might be easy to read, normally we'd consider this bad, but as it will still work decend response time for 500, which will return Infinity instead of the correct result, it is good enough. Computers are fast and the V8 engine is really good.
 * 
 * @param {*} n 
 * @returns 
 */
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(100));
console.log(factorial(500));