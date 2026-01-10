export { Character, Warrior, Wizard };

/**
 * A toy class for learning.
 */
class Character {

    /**
     * There is not much to say, a class ususally comes with a constructor, as almost always there is something information-wise needed to create a specific object/instance of the general class. Some classes can have useful default constructors without arguments, such as new Date() creating a data object for the point in time it is created (now).
     * 
     * @param {*} args The arguments used for constructing the Character object.
     */
    constructor(args) {
        this.name = args.name ? args.name : 'unknown';
        this.sex = args.sex ? args.sex : 'unknown';
    }
}

class Wizard extends Character {
    constructor(args) {
        super(args);

        this.spellcastingTrait = 'Knowledge';
        this.lastUpdate = new Date();
    }

    toString() {
        return 'Puny Wizard ' + this.name + ' (' + this.sex + ')';
    }
}

class Warrior extends Character {
    constructor(args) {
        super(args);
    }

    toString() {
        return `Mighty Warrior ${this.name} (${this.sex})`;
    }
}


let party = [];
party.push(new Wizard({ name: 'Gial Engstrand', sex: 'male' }));
party.push(new Warrior({ name: 'Talokai', sex: 'female' }));


party.forEach(c => { console.log(c.toString()) });