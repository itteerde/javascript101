/**
 * string is an elementary data type in JavaScript (as in most modern languages, but not all, especially not those trying to be fast on the system levels).
 * 
 * String is a Standard built in object of the JavaScript standard, that provides a lot of functionality to work with strings.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * https://www.w3schools.com/js/js_string_methods.asp
 */

const s1 = "This is a string literal using double quotes. As many languages use this JavaScript supports it.";
const s2 = 'This is a string literal using single quotes as many JavaScript users prefer, not least because it is different from HTML.';
const s3 = `This is string being produced by a format expression, which can contain computations like 3²+4²=5²: ${3 ** 2 + 4 ** 2 == 5 ** 2}.`

console.log({ s1: s1, s2: s2, s3: s3 });

const strings = [s1, s2, s3];

for (const s of strings) {
    console.log(`32th character in ${s}: ${s.charAt(32)} (${s.charCodeAt(32)})`);
}

for (const s of strings) {
    console.log(`Does ${s} contain 'literal': ${s.includes('literal')})`);
}

console.log(s1.includes('javascript'));
console.log(s1.includes('Javascript'));
console.log(s1.toLocaleLowerCase().includes(('javascript').toLocaleLowerCase()));
console.log(s1.toLocaleLowerCase().includes(('Javascript').toLocaleLowerCase()));

const paragraph = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
//
// for Regular Expressions see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
// Regular Expressions are very powerful, but hard to read and understand, therefore also error-prone.
const regex = /[^\w\s']/g;

console.log(paragraph.search(regex));
// Expected output: 41

console.log(paragraph[paragraph.search(regex)]);
// Expected output: "!"

// For most searches it is better if one can just specify the substring to be searched for by literal (or string variable)
// const paragraph = "I think Ruth's dog is cuter than your dog!";
const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
    `The index of the second "${searchTerm}" is ${paragraph.indexOf(
        searchTerm,
        indexOfFirst + 1,
    )}`,
);
// Expected output: "The index of the second "dog" is 38"

console.log(
    `Index of the last "${searchTerm}" is ${paragraph.lastIndexOf(searchTerm)}`,
);
// Expected output: "Index of the last "dog" is 38"
