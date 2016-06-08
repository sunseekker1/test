
/*$( document ).ready(function() {*/


    var Person = function (name){
        this.name = name;

        this.sayName = function (){
            console.log(this.name, "Person.sayName()");
        };
    };

    var Musician = function (name, instrument){
        Person.call(this, name);
        this.instrument = instrument;

        this.getInstrument = function (){
            console.log(this.instrument, "Musician.getInstrument()");
        };
    };
    Musician.prototype = new Person();
    Musician.prototype.sayName = function (){
        console.log(this.name, "Musician.sayName()");
    };

    var john = new Person("John");
    var bobby = new Person("Bobby");
    var luke = new Musician("Luke", "Guitar");

    bobby.sayName();
    luke.sayName();
    luke.getInstrument();

/*
});*/
