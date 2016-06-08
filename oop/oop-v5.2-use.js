(function(ns){
    
    // class Person
    ns.Person = function (name){
    
        // Public
        this.name = name;
    
        // Public
        this.sayName = function (){
            console.log("Person.sayName(): ", this.name);
        };
    
        // Public
        this.shoutName = function (){
            console.log("Person.shoutName(): ", this.name);
        };
    };
    
    // class Musician
    ns.Musician = function (name, instrument, age){
        ns.Person.call(this, name);
    
        // Public
        this.instrument = instrument;
    
        // Private
        var privateAge = age;
    
        //Public
        this.getInstrument = function (){
            console.log("Musician.getInstrument()", this.instrument);
        };
    
        //Public
        this.shoutName = function (){
            console.log("Musician.shoutName()", this.name);
        };
    
        //Public
        this.getAge = function (){
            privateGetAge();
        };
    
        // Private
        var privateGetAge = function (){
            console.log("Musician.privateGetAge()", privateAge);
        };
    };
    ns.Musician.prototype = new ns.Person(); // extend class Person
    ns.Musician.prototype.constructor = ns.Musician;

})(global.namespace = global.namespace || {});

// create intances
var john = new namespace.Person("John Person");
var bobby = new namespace.Person("Bobby Person");
var luke = new namespace.Musician("Luke Musician", "Guitar", 39);

// call functions
john.sayName();
bobby.shoutName();
luke.sayName();
luke.shoutName();
luke.getInstrument();
luke.getAge();

