/**
 * "Computer programs work by manipulating values, such as the number 3.14 or the text "Hello World". The kinds of values that can be represented and manipulated in a programming language are known as types, and one of the most fundamental characteristics of a programming language is the set of types it supports. When a program needs to retain a value for future use, it assigns the value to (or "stores" the value in) a variable. Variables have names, and they allow use of those names in our programs to refer to values. The way that variables work is another fundamental characteristic of any programming language. [...]
 * 
 * JavaScript types can be divided into two categories: primitive types and object types. JavaScript's primitive types include numbers, strings of text, (known as strings), and Boolean truth values (known as booleans). [...]
 * 
 * The special JavaScript values null and undefined are primitive values, but they are not numbers, strings or booleans. [...]
 * 
 * Any JavaScript value that is not a number, a string, a boolean, a symbol, null, or undefined is an object. An object (that is, a member of the type object) is a collection of properties where each property has a name and a value (either a primitive value or another object). [...]
 * 
 * An ordinary JavaScript object is an unordered collection of named values. The language also defines a special kind of object, known as an array, that represents an ordered collection of numbered values. The JavaScript language includes special syntax for working with arrays, and arrays have some special behavior that distinguishes  them from ordinary objects. [...]
 * 
 * JavaScript differs from more static languages in that functions and classes are not just part of the language syntax: they are themselves values that can be manipulated by JavaScript programs. Like any JavaScript value that is not a primitive value, functions and classes are s specialized kind of object. [...]
 * 
 * JavaScript liberally converts values from one type to another. If a program expects a string, for example, and you give it a number, it will automatically convert the number to a string for you. And if you use non-boolean value where a boolean is expected, JavaScript will convert them accordingly. [...]
 * 
 * JavaScript's primary numeric type, Number, is used to represent integers and to approximate real numbers. JavaScript represents numbers using the 64-bit floating-point format defined by the IEEE 754 standard, which means it can represent numbers as large as +/- 1.7976931348623157 x 10^308 and as small as +/- 5 x 10^-324.
 * 
 * The JavaScript number format allows you to exactly represent all integers between -9,007,199,254,740,992 (-2^53) and 9,007,199,254,740,992 (2^53), inclusive. If you use integer values larger than this, you may lose precision in the trailing digits. Note, however, that certain operations in JavaScript (such as array indexing and the bitwise operators [...] are performed with 32-bit integera."
 * 
 * (David Flanagan, JavaScript The Definitive Guide)
 */

/**
 * And while we don't have to care (much) about things developers are concerned for other languages, like what make of CPU or GPU works how fast for what computation on what kind of number (we only have one anyways, ignoring BigInteger), while we are not concerned much about the efficiency of types, we need to be as careful (or more, as we have no compiler watching over us) as anyone else about not confusing/ misusing the types and operations on their values.
 * 
 * And while it is true that JavaScript is really slow compared to the high performance compiled languages in almost everything (the V8 engine has brought good performance to some escpecially important functions on some of the most regular uses of some kinds of Object, which prevented the collapse of the "web stack" for the time being, allowing for its real breakthrough instead. Based on it (and it is beneath every relevant runtime now) we don't care about performance in the most narrow sense, but as shown with bad recursion uses versus half decent algorithms, algorithms and data structures still matter as they do in every environment, short of some niche quantum computing cases).
 */

/**
 * "One of the most fundamential techniques of computer programming is the use of names -- or identifiers -- to represent values. Binding a name to a value gives us a way to refer to that value and use it in the programs we write. When we do this, we typically say that we are assigning a value to a variable. The term "variable" implies that new values can be assigned: that the value associated with the variable may vary as our program runs. If we permanently assign a value to a name, then we call that name a constant instead of a variable.
 * 
 * Before you can use a variable or constant in a JavaScript program, you must declare it. In ES6 and later, this is done with the let and const keywords[.] [...]
 * 
 * The scope of a variable is the region of your program source code in which it is defined. Variables and constants declared with let and const are block scoped. This means that they are only defined within the block of code in which the let or const statement appears. JavaScript class and function definitions are blocks, and so are the bodies of if/else statements, while loops, for loops, and so on. Roughly speaking, if a variable or constant is declared withing a set of curley braces, then those curly braces delimit the region of code in which the variable or constant is defined (though of course it is not leval to reference a variable or constant from lines of code that execute before the let or const statements that declares the variable). Variables and constants declared as part of a for, for/in, or for/of loop have the loop body as their scope, even though they technically appear outside of the curly braces."
 * 
 * (David Flanagan, JavaScript The Definitive Guide)
 */

let sectionCounter = 1;
function printSectionHead() { console.log(`\n=== Section ${('' + sectionCounter++).padStart(3)} ===========================`); }

printSectionHead();
let something = 42;
console.log(`something: ${something}, typeof ${something}: ${typeof something}`);
something = Math.PI;
console.log(`something: ${something}, typeof ${something}: ${typeof something}`);
something = 'pee?';
console.log(`something: ${something}, typeof ${something}: ${typeof something}`);
something = '' + 42;
console.log(`something: ${something}, typeof ${something}: ${typeof something}`);
something = { something: 42 };
console.log(`something: ${JSON.stringify(something)}, typeof ${something}: ${typeof something}`);

printSectionHead();
something = 42;
if (something === 42) {
    let something = 21;
    console.log(`something: ${something}, typeof ${something}: ${typeof something}`);
}
console.log(`something: ${something}, typeof ${something}: ${typeof something}`);

printSectionHead();
something = printSectionHead;
console.log(`something: ${something}, typeof ${something}: ${typeof something}`);

printSectionHead();
something = new Date();
console.log(`something: ${something}, typeof ${something}: ${typeof something}`);
console.log(something.valueOf());
console.log(something);
something.something = 'Blutwurz';
console.log(Object.getOwnPropertyNames(something));
console.log(something);
console.log(something.something);
console.log(something.valueOf());
/**
 * I think it is safe to say that one would be hard pressed to imagine a proper use for mutilating a value this way, but it is obviously possible, given that Data is just a kind of Object, and all objects can be freely cut and glued around with. Rather if we want to extened (or restrict) what built in objects can do, we should use OOP (of the JavaScript kind, which might make some C++ architects wince in pain) in order to get what we want in a more accepted way (note that adhering to common patterns makes it much easier to maintain code, even if it is only ever the author who needs to touch it. For teams it should be obvious.).
 */

printSectionHead();
class MyDate extends Date {
    constructor() {
        super();
        this.something = 'Bärwurz';
    }
}
something = new MyDate();
console.log(Object.getOwnPropertyNames(something));
console.log(something);
console.log(something.something);
console.log(something.valueOf());

/**
 * This documentation means nothing to the language, but tools like VSCode or TypeScript's documentation compiler can work with it. The Foundry API documentation is generated from those comments via. Type Script's documentation compiler.
 * 
 * While this example seems dumb (it is), the method might start to make some sense. We'll expand (a lot) on it when going into OOP with classes.
 * 
 * @param {MyDate} date 
 */
function printSchnapsDate(date) {
    return { date: date.toUTCString(), schnaps: date.something };
}
console.log(printSchnapsDate(new MyDate()));


