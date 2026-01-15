/**
 * Object is the main data structure for organizing and moving data in JavaScript.
 * 
 */

/**
 * {} is an empty Object
 */
const gial = {};

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

console.log(gial);

console.log(Object.getOwnPropertyNames(gial));

console.log(gial.warCry());