
const gial = {};

gial.age = 60;
gial.name = 'Gial Engstrand';
gial.class = 'Wizard'
gial.weapon = 'Greatstaff';
gial.warCry = function () { return 'Help!' };

console.log(gial);

delete gial.weapon;

console.log(gial);

console.log(Object.getOwnPropertyNames(gial));

console.log(gial.warCry());