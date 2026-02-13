/**
 * "An expression is a phrase of JavaScript that can be evaluated to produce a value. A constant embedded literally in your program is a very simple kind of expression. A variable name is also a simple expression that evaluates to whatever value has been assigned to that variable. Complex expressions are built from simpler expressions. [...]
 * 
 * The most common way to build a complex expression out of simpler expressions is with an operator. An operator combines the values of its operands (usually two of them) in some way and evaluates to a new value. [...]
 * 
 * The simplest expressions, known as primary expressions, are those that stand alone -- they do not include any simpler expressions. Primary expressions in JavaScript are constant or literal values, certain language keywords, and variable references."
 * 
 * (David Flanagan, JavaScript The Definitive Guide)
 */

/**
 * "Literals are constant values that are embedded directly in your program."
 * 
 * (David Flanagan, JavaScript The Definitive Guide)
 */

1.23 // A number literal
"hello" // A string literal
let r = /\s+java\s+/ // a regular expression literal (that matches all strings containing the sequence of characters 'java')

/**
 * "Object and array initializers are expressions whose value is a newly created object or array. These initializer expressions are sometimes called object literals and array literals. Unlike true literals, however, they are not primary expressions, because they include a number of subexpressions that specify property and element values. Array initializers have a slightly simpler syntax, and we'll begin with those.
 * 
 * An array initializer is a comma-separated list of expressions contained within square brackets. The value of an array initializer is a newly created array. The elements of this new array are initialized to the values of the comma-separated expressions:"
 * 
 * (David Flanagan, JavaScript The Definitive Guide)
 */

let a = [] // An empty array: no expressions inside brackets means no elements
[1 + 2, 3 + 4] // A 2-element array. The expressions inside are evaluated first, creating an array with two elements: 3,7

/**
 * The element expressions in an array initializer can themselves be array initializers, which means that these expressions can create nested arrays:
 * 
 * (David Flanagan, JavaScript The Definitive Guide)
 */

let matrix = [[1, 2, 3], [4, 5, 6,], [7, 8, 9]];

/**
 * Don't assume the language to enforce more structure (like enforcing what you'd like to represent a matrix to be rectangular).
 */

let something = [[1, 2, 3], [null, 'Blutwurst', { name: 'Gial Engstrand', occupation: 'alchemist' }], [], [Math.PI]]; // hard to imagine we ever want this, but it is possible

/**
 * Most timees we use arrays as ordered containers (not necessarily sorted in any way, just indexed) of things of the same kind, that can be used in the same way. We usually use objects to express aggregates of different kinds of things that belong together, the belonging things/parts being the object's properties.
 */

/**
 * Obejct initializer expressions are like array initializer expressions, but the square brackets are replaced by curly brackets, and each subexpression is prefixed with a property name and a colon:
 * 
 * (David Flanagan, JavaScript The Definitive Guide)
 */

let p = { x: 2.3, y: -1.2 }; // an object that might represent a point
let q = {}; // an object without properties ("empty")
q.x = 2.3;
q.y = -1.2; // now p and q are equal objects semantically, however
console.log(`${JSON.stringify(p)}===${JSON.stringify(q)}: ${p === q}`); // will print false, as the === operator does not go through properties. If you'd like those to be points (besides maybe making a class Point then, youd have to write your own check for equality by the rules of whatever geometry or other use case you have in mind)
console.log(JSON.stringify(p) === JSON.stringify(q)); // does work often as a primitive === trick for objects, but should be taken with care. Better look into classes and methods

/**
 * A function definition expression defines a JavaScript function, and the value of such an expression is the newly defined funtion. In a sense, a function definition expression is a "function literal" in the same way that an object initializer is an "object literal". A function definition expression typically consists of the keyword function followed by a comma-separated list of zero or more identifiers (the parameter names) in parantheses and a block of JavaScript code (the function body) in curly braces. For example: 
 * 
 * (David Flanagan, JavaScript The Definitive Guide)
 */

let square = function (x) { return x * x; }; // This might be confusing. Usually we don't need a variable storing a function, but rather give it a name and call it like
function abs(x) { return x >= 0 ? x : x * (-1) } // this might however make it more readable when the console returns the function instead of calling it when referencing it without ().

/**
 * A property access expression evaluates to the value of an object property or an array element. JavaScript defines two syntaxes for property access:
 * 
 * expression . identifier
 * expression [ expression ]
 * 
 * (David Flanagan, JavaScript The Definitive Guide)
 */

let o = { label: 'something', one: 'eins', two: 'zwei', three: 'drei' };
console.log(o.two);
let numbers = ['one', 'two', 'three'];
for (const n of numbers) {
    console.log(o[n]); // accessing the properties by their names (strings), without the need to know what they will be as typing literals would require
}

/**
 * Conditional property access
 */
o = { a: 1, b: 2, c: { x: 3, y: 4 } };
console.log(o.c.x);
//console.log(o.b.x.something);
//console.log(o.b?.x?.something);