// constructor
function Person(name) {
    this.name = name;
}
// add methods to the constructor
Person.prototype.getName = function() {
    return this.name;
};

var p = new Person('Jim');
console.log(p.getName());