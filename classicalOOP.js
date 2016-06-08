
/*$( document ).ready(function() {*/


    var Person = function (name){
        this.name = name;
    };
    Person.prototype.sayName = function (){
        console.log(this.name, "Person.sayName()");
    };

    var Musician = function (name, instrument){
        Person.call(this, name);
        this.instrument = instrument;
    };
    Musician.prototype = Object.create(Person.prototype);
    Musician.prototype.constructor = Musician;

    Musician.prototype.sayName = function (){
        //Person.prototype.sayName.call(this);
        console.log(this.name, "Musician.sayName()");
    };
    Musician.prototype.getInstrument = function (){
        console.log(this.instrument, "Musician.getInstrument()");
    };

    var john = new Person("John");
    var bobby = new Person("Bobby");
    var luke = new Musician("Luke", "Guitar");

    bobby.sayName();
    luke.sayName();
    luke.getInstrument();

/*
});*/
