
/*$( document ).ready(function() {*/

    //  variant with inherits function
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
        //  variant with inherits function
        //Musician.super_.call(this, name);

        //  classical oop variant
        Person.call(this, name);
        this.instrument = instrument;
    };
    //  variant with inherits function
    //inherits(Musician, Person);

    //  classical oop variant
    Musician.prototype = Object.create(Person.prototype);
    Musician.prototype.constructor = Musician;

    Musician.prototype.sayName = function (){
        Person.prototype.sayName.call(this);

        console.log(this.name, "Musician.sayName()");
    };
    Musician.prototype.getInstrument = function (){
        console.log(this.instrument);
    };

    var john = new Person("John");
    var bobby = new Person("Bobby");
    var luke = new Musician("Luke", "Guitar");

    bobby.sayName();
    luke.sayName();
    luke.getInstrument();

/*
});*/
