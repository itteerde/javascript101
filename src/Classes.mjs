export { Character, Warrior, Wizard };

class Character {
    constructor(args) {
        this.name = args.name ? args.name : 'unknown';
        this.sex = args.sex ? args.sex : 'unknown';
    }
}

class Wizard extends Character {
    constructor(args) {
        super(args);

        this.spellcastingTrait = 'Knowledge';
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