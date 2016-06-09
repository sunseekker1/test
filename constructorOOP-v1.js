// class Person
var Person = function (name) {
    this.name = name;
};

Person.prototype = {
    constructor: Person,
    sayName: function ()  {
        console.log("Person.sayName(): ", this.name);
    },
    shoutName: function ()  {
        console.log("Person.shoutName(): ", this.name);
    }
};

// class Musician
var Musician = function (name, instrument){
    Person.call(this, name);
    this.instrument = instrument;
};
//Musician.prototype = Object.create(Person.prototype); // extend class Person
Musician.prototype = {
    constructor: Musician,
    getInstrument: function ()  {
        console.log("Musician.getInstrument()", this.instrument);
    },
    shoutName: function ()  {
        //Person.prototype.sayName.call(this);
        console.log("Musician.shoutName(): ", this.name);
    }
};


// create intances
var john = new Person("John Person");
var bobby = new Person("Bobby Person");
var luke = new Musician("Luke Musician", "Guitar");


// call functions
john.sayName();
bobby.shoutName();
//luke.sayName();
luke.shoutName();
luke.getInstrument();