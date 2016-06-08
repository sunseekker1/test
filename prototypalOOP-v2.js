// class Person
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
        console.log("Person.sayName(): ", this.name);
    }
};

// class Musician
var Musician = Person.create({
    getInstrument: function (){
        console.log("Musician.getInstrument()", this.instrument);
    }
});

// create intances
var john = Person.create({name: "John"});
var bobby = Person.create({name: "Bobby"});
var luke = Musician.create({name: "Luke", instrument: "Guitar2"});

// call functions
bobby.sayName();
luke.sayName();
luke.getInstrument();

console.log(bobby);

