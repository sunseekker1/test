
// class Person
var Person = {
    name: "",
    sayName: function (){
        console.log("Person.sayName(): ", this.name);
    }
};

// class Musician
var Musician = Object.create(Person); // extend class Person
Musician.instrument = "";
Musician.getInstrument = function (){
    console.log("Musician.getInstrument()", this.instrument);
};

// create intances
var john = Object.create(Person);
john.name = "John";
var bobby = Object.create(Person);
bobby.name = "Bobby";
var luke = Object.create(Musician);
luke.name = "Luke";
luke.instrument = "Guitar";

// call functions
bobby.sayName();
luke.sayName();
luke.getInstrument();

