var  events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person,events.EventEmitter);

var Zerif = new Person('Zerif');
var Bolt = new Person('Bolt');
var Mcany = new Person('Mcany');
var people = [Zerif,Bolt,Mcany];

people.forEach(function(Person){
    Person.on('speak',function(msg){
        console.log(Person.name + ' said : ' + msg);
    });
});

Zerif.emit('speak','Aur Bhai kaisa hai');
Bolt.emit('speak','Sab badhiya.. Tu bta');