/**
 * "Objects are JavaScript's most fundamental datatype [...]. Because objects are so important to the JavaScript language, it is important that you understand how they work in detail [...].
 * 
 * [...]
 * 
 * An object is a composite value: it aggregates multiple values (primitive values or other objects) and allows you to store and retrieve those values by name. An object is an unordered collection of properties, each of which has a name and a value. Property names are usually strings [...], so we can say that objects map strings to values. [...] In addition to maintaining its own set of properties, a JavaScript object also inherits the properties of another object, known as its prototype. The methods of an object are typically inherited properties, and this prototypal inheritance is a key feature of JavaScript.
 * 
 * JavaScript objects are dynamic -- properties can usually be added and delted -- but they can be used to simulate the static objects and structs of statically typed languages. They can also be used (by ignoring the value part of the sting-to-value mapping) to represent sets of strings." (David Flanagan, JavaScript The Definitive Guide)
 * 
 */

/**
 * {} is an empty Object
 */
let gial = {};

/**
 * If .[propertyName] is undefined just assigning any value to it defines/ creates that property for the Object. If it was defined it would be overwritten as usual by doing an assignement.
 */
gial.age = 60;

gial.name = 'Gial Engstrand';
gial.class = 'Wizard'
gial.weapon = 'Greatstaff';

/**
 * A nice feature of JavaScript (hurting readability sometimes) is that one can just put a function into any object. Note that most programmers trained in Object Oriented Programming (OOP) will usually favor creating Classes and define functionality there in a more stable/ standard manner -- not least for documentation and readability (under the hood though JavaStript is a language based on Obeject and prototypes, which means technically it matters little if you desing more "clean" with classes and class hierarchies, or "cobble together" your objects by hand in less widely endorsed ways.).
 * 
 * The "cleaner" approaches arguably reduce the likelyhood of errors, and make it easier to work with others. Considerations about runtime efficiency/ performance/ memory tend to matter less in JavaScript. For usual non-professional uses optimizing the data layout is not needed (very different from C/C++ [or any other compiled language] operating system core stuff, game engine cores, ...).
 * 
 * @returns 
 */
gial.warCry = function () { return 'Help!' };

console.log(gial);

/**
 * The delete operation removes the property from an Object. Note that in many use cases setting an semantically "empty" property to a value signifying being empty is preferable, including for documentation/ readability.
 */
delete gial.weapon;

console.log(gial.warCry());

console.log(gial);

for (const p in gial) {
    console.log(p);
}

let clone = Object.assign({}, gial);

console.log(clone);
console.log(clone.warCry());

import import_gial from '../data/gial.json' with { type: 'json'};

gial = import_gial;


/**
 * Set a Breakpoint on this line and explore the debugger.
 */
console.log(gial.items.filter(i => i.name.includes('Recipe')));