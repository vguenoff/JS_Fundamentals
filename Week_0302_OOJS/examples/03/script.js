function Person(name, age) {
    this.name = name;
    this.age = age;
    // the wrong way
    // this.sayHello = function() {
    //     debugger;
    //     console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
    // };
}

// the right way
Person.prototype.sayHello = function() {
    var person = this;
    console.log(`Hi, my name is ${person.name} and I'm ${person.age} years old.`);
};

var john = new Person('John', 23);
john.sayHello();