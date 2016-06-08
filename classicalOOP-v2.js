
function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
}

// class Person
var Person = function (name){
    this.name = name;
};
Person.prototype.sayName = function (){
    console.log("Person.sayName(): ", this.name);
};

// class Musician
var Musician = function (name, instrument){
    Musician.super_.call(this, name);

    this.instrument = instrument;
};
inherits(Musician, Person); // extend class Person

Musician.prototype.sayName = function (){
    //Person.prototype.sayName.call(this);
    console.log("Musician.sayName(): ", this.name);
};
Musician.prototype.getInstrument = function (){
    console.log("Musician.getInstrument()", this.instrument);
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
