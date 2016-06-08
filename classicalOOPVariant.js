
/*$( document ).ready(function() {*/

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

    var Person = function (name){
        this.name = name;
    };
    Person.prototype.sayName = function (){
        console.log(this.name, "Person.sayName()");
    };

    var Musician = function (name, instrument){
        Musician.super_.call(this, name);

        this.instrument = instrument;
    };
    inherits(Musician, Person);

    Musician.prototype.sayName = function (){
        Person.prototype.sayName.call(this);
    };
    Musician.prototype.getInstrument = function (){
        console.log(this.instrument, "Musician.getInstrument()");
    };

    var john = new Person("John", "Guitar");
    var bobby = new Person("Bobby");
    var luke = new Musician("Luke", "Guitar");

    bobby.sayName();
    luke.sayName();
    luke.getInstrument();


/*
});*/
