// class Person
var Person = function (name){
    this.name = name;

    this.sayName = function (){
        console.log("Person.sayName(): ", this.name);
    };

    this.shoutName = function (){
        console.log("Person.shoutName(): ", this.name);
    };
};

// class Musician
var Musician = function (name, instrument, age){
    Person.call(this, name);

    this.instrument = instrument;

    var privateAge = age;

    this.getInstrument = function (){
        console.log("Musician.getInstrument()", this.instrument);
    };

    this.shoutName = function (){
        console.log("Musician.shoutName()", this.name);
    };

    this.getAge = function (){
        privateGetAge();
    };

    var privateGetAge = function (){
        console.log("Musician.privateGetAge()", privateAge);
    };
};
Musician.prototype = new Person(); // extend class Person

// create intances
var john = new Person("John Person");
var bobby = new Person("Bobby Person");
var luke = new Musician("Luke Musician", "Guitar", 39);

// call functions
john.sayName();
bobby.shoutName();
luke.sayName();
luke.shoutName();
luke.getInstrument();
luke.getAge();

