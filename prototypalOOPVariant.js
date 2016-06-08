
/*$( document ).ready(function() {*/


    var Person = {
        name: "",
        create: function (values){
            var instance = Object.create(this);
            Object.keys(values).forEach(function(key){
                instance[key] = values[key];
            });
            return instance;
        },
        sayName: function (){
            console.log(this.name, "Person.sayName()");
        }
    };

    var Musician = Person.create({
        getInstrument: function (){
            console.log(this.instrument, "Musician.getInstrument()");
        }
    });


    var john = Person.create({name: "John"});
    var bobby = Person.create({name: "Bobby"});
    var luke = Musician.create({name: "Luke", instrument: "Guitar2"});

    bobby.sayName();
    luke.sayName();
    luke.getInstrument();

    console.log(bobby);



/*
});*/
