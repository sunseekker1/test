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
    },
    shoutName: function (){
        console.log("Person.shoutName(): ", this.name);
    }
};

// class Musician
var Musician = Person.create({
    getInstrument: function (){
        console.log("Musician.getInstrument()", this.instrument);
    },
    shoutName: function (){
        console.log("Musician.shoutName()", this.name);
    }
});

// create intances
var john = Person.create({name: "John Person"});
var bobby = Person.create({name: "Bobby Person"});
var luke = Musician.create({name: "Luke Musician", instrument: "Guitar"});

// call functions
john.sayName();
bobby.sayName();
luke.sayName();
luke.shoutName();
luke.getInstrument();


