(function(){
    'use strict';
    // constructor function
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year= year;
        console.log(this);
    }
    
    console.log(this);

    // new instance of Car
    var vw = new Car('VW', 'Golf', 2006);
    var tesla = new Car('Tesla', 'Model 3', 2016);

    // log the new objects and properties
    console.log(vw);
    console.log(vw.make);
    console.log(vw.model);
    console.log(vw.year);

    console.log(tesla);
    console.log(tesla.make);
    console.log(tesla.model);
    console.log(tesla.year);

    // checking
    console.log(vw instanceof Car);
    console.log(tesla instanceof Car);
}());