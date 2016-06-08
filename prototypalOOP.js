
/*$( document ).ready(function() {*/


    var Person = {
        name: "",
        sayName: function (){
            console.log(this.name, "Person.sayName()");
        }
    };

    var Musician = Object.create(Person);
    Musician.instrument = "";
    Musician.getInstrument = function (){
        console.log(this.instrument, "Musician.getInstrument()");
    };


    var john = Object.create(Person);
    john.name = "John";
    var bobby = Object.create(Person);
    bobby.name = "Bobby";
    var luke = Object.create(Musician);
    luke.name = "Luke";
    luke.instrument = "Guitar";

    bobby.sayName();
    luke.sayName();
    luke.getInstrument();

console.log(john);



/*
});*/
