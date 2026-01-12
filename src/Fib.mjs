
/**
 * Same strategy as for faculty, but fibonacci has a much worse growth, so direct (recursive) implementation of the math is no longer reasonable.
 * 
 * @param {*} n 
 * @returns 
 */
function fib_recursive(n) {
    return n <= 1 ? n : fib_recursive(n - 1) + fib_recursive(n - 2);
}

/**
 * Still the naive algorithm, but (beyond now checking for arguments validity [except checking that the argument is an integer]) now fine for the scope JavaScript can cover with its primitive data types.
 * 
 * @param {*} n 
 * @returns 
 */
function fib(n) {
    var a = 0, b = 1, c;
    if (n < 3) {
        if (n < 0) return fib(-n);
        if (n === 0) return 0;
        return 1;
    }
    while (--n)
        c = a + b, a = b, b = c;
    return c;
}

console.log('recursive');
for (let n = 5; n <= 45; n += 5) {
    const startTime = performance.now();
    const fib_n = fib_recursive(n);
    console.log(`fib(${n}): ${fib_n} (${performance.now() - startTime}ms)`);
}

console.log('iterative with memory');
for (let n = 0; n <= 1000; n += 200) {
    const startTime = performance.now();
    const fib_n = fib(n);
    console.log(`fib(${n}): ${fib_n} (${performance.now() - startTime}ms)`);
}
