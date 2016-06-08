// class Person
var Person = function (name){
    this.name = name;

    this.sayName = function (){
        console.log("Person.sayName(): ", this.name);
    };
};

// class Musician
var Musician = function (name, instrument){
    Person.call(this, name);
    this.instrument = instrument;

    this.getInstrument = function (){
        console.log("Musician.getInstrument()", this.instrument);
    };
};
Musician.prototype = new Person(); // extend class Person
Musician.prototype.sayName = function (){
    console.log("Musician.sayName(): ", this.name);
};

// create intances
var john = new Person("John");
var bobby = new Person("Bobby");
var luke = new Musician("Luke", "Guitar");

// call functions
john.sayName();
bobby.sayName();
luke.sayName();
luke.getInstrument();

