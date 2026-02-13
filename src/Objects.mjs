/**
 * Objects are JavaScript's most fundamental datatype [...]. Because objects are so important to the JavaScript language, it is important that you understand how they work in detail [...]. It begins with a formal overview of objects, then dives into practical sections about creating objects and querying, setting, deleting, testing, and enumerating the properties of objects. These property-focused sections are followed by sections that explain how to extend, serialize, and define important methods on objects. Finally, the chapter concludes with a long section about new object literal syntax in ES6 and more recent versions of the language.
 * 
 * An object is a composite value: it aggregates multiple values (primitive values or other objects) and allows you to store and retrieve those values by name. An object is an unordered collection of properties, each of which has a name and a value. Property names are usually strings (although [...] property names can also be Symbols), so we can say that objects map strings to values. This string-to-value mapping goes by various names -- you are probably already familiar with the fundamental data structure under the name "hash", "hashtable", "dictionary", or "associative array". An object is more than a simple string-to-value map, however. In addition to maintaining its own set of properties, a JavaSript object also inherits the properties of another object, known as its "prototype". The methods of an object are typically inherited properties, and this "prototypal inheritance" is a key feature of JavaScript.
 * 
 * JavaScript objects are dynamic -- properties can usually be added and deleted -- but they can be used to simulate the static objects and "structs" of statically typed languages. They can also be used (by ignoring the value part of the string-to-value mapping) to represent sets of strings.
 * 
 * Objects can be created with object literals, with the new keyword, and with the Object.create() function. The subsections below describe each technique.
 * 
 * (David Flanagan, JavaScript The Definitive Guide)
 */

/**
 * The easiest way to create an object is to include an object literal in your JavaScript code. In its simplest form, an object literal is a comma-separated list of colon-separated name:value pairs, enclosed within curly braces. A property name is a JavaScript identifier or a string literal (the empty string is allowed). A property value is any JavaScript expression; the value of the expression (it may be a primitive value or an object value) becomes the value of the property.
 * 
 * (David Flanagan, JavaScript The Definitive Guide)
 */

let empty = {};
let point = { x: 0, y: 0 };
let p2 = { x: point.x, y: point.y + 1 };
let book = {
    "main title": "JavaScript",
    "sub-title": "The Definitive Guide",
    for: "all audiences",
    author: {
        firstname: "David",
        surname: "Flanagan"
    }
};

/**
 * A trailing comma following the last property in an object literal is legal, and some programming styles encourage the use of these trailing commas so you're less likely to cause a syntax error if you add a new property at the end of the object literal at some later time.
 * 
 * An object literal is an expression that creates and initializes a new and distinct object each time it is evaluated. The value of each property is evaluated each time the literal is evaluated. This means that a single object literal can create many new objects if it appears within the body of a loop or in a function that is called repeatedly, and that the property values of these objects may differ from each other.
 * 
 * The object literals shown here use simple syntax that has been legal since the earliest versions of JavaScript. Recent versions of the language have introduced a number of new object literal features [...]
 * 
 * The new operator creates and initializes a new object. The new keyword must be followed by a function invocation. A function used in this way is called a constructor and serves to initialze a newly created object. JavaScript includes constructors for its built-in types. For example:
 * 
 * (David Flanagan, JavaScript The Definitive Guide)
 */

let o = new Object(); // Create an empty object: same as {}.
let a = new Array(); // Create an empty array: same as [].
let d = new Date(); // Create a Date object representing the current time
let r = new Map(); // Creaate a Map object for key/value mapping

/**
 * Before we can cover the third object creation technique, we must pause for a moment to explain prototypes. Almost every JavaScript object has a second second JavaScript object associated with it. This second object is known as a prototype, and the first object inherits properties from the prototype.
 * 
 * All objects created by object literals have the same prototype object, and we can refer to this prototype object in JavaSript code as Object.prototype. Objects created using the new keyword and a constructor invocation use the value of the prototype property of the constructor function as their prototype. So the object created by new Object() inherits from Object.prototype, just as the object created by {} does. Similarly, the object created by new Array() uses Array.prototype as its prototype, and the object created by new Date() uses Date.prototype as its prototype. This can be confusing when first learning JavaScript. Remember: almost all objects hava a prototype, but only a relatively small number of objects hava a prototype property. It is these objects with prototype properties that define prototypes for all the other objects.
 * 
 * Object.prototype is one of the rare objects that has no prototype: it does not inherit any properties. Other prototype objects are normal objects that do hava a prototype. Most built-in constructors (and most user-defined constructors) hava a prototype that inherits from Object.prototype. For example Date.prototype inherits properties from Object.prototype, so a Date object created by new Date() inherits properties from both Date.prototype and Object.prototype. This linked series of prototypes objects is known as prototype chain.
 * 
 * (David Flanagan, JavaScript The Definitive Guide)
 */

/**
 * Object.create() creates a new object, using its first argument as the prototype of that object:
 * 
 * (David Flanagan, JavaScript The Definitive Guide)
 */

let o1 = Object.create({ x: 1, y: 2 }); // o1 inherits properties x any y.
o1.x + o1.y // => 3

/**
 * To obtain the value of a property, use the dot (.) or square bracket ([]) operators [...] The lefthand side should be an expression whose value is an object. If using the dot operator, the righthand side must be a simple identifier that names the property. If using square brackets, the value within the brackets must be an expression that evaluates to a string that contains the desired property name:
 * 
 * (David Flanagan, JavaScript The Definitive Guide)
 */

let author = book.author;
let name = author.surname;
let title = book["main title"];