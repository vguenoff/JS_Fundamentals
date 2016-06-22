// !!!  rewrite  !!!


var CarItem = (function() {
    'use strict';

    var premiumModels = ['Passat', 'Phaeton', 'Cherokee'];

    function Car(make, model, year) {
        this._make = make;
        this._model = model;
        this._year = year;

        this.isPremiumModel = isPremiumModel(model);
        this.isBrandNew = isCarBrandNew(year);
    }

    Car.prototype = {
        move: function move() {
            console.log('Car is moving');
        }
    };

    function isCarBrandNew(year) {
        if (year >= 2015) {
            return true;
        }

        return false;
    }

    function isPremiumModel(model) {
        if (premiumModels.indexOf(model) >= 0) {
            return true;
        }

        return false;
    }

    return Car;
}());

var SuvCar = (function(){
    'use strict';

    function SuvCar(make, model, year, is4Wheel) {
        CarItem.call(this, make, model, year);
     
        this._is4Wheel = is4Wheel;
    }

    // SuvCar.prototype = CarItem.prototype;
    SuvCar.prototype = new CarItem();
    
    SuvCar.prototype.move = function(distance) {
        CarItem.prototype.move.call(this);
        console.log(`${distance}km ahead`);
    };

    return SuvCar;
}());


var vw = new CarItem('VW', 'Golf', 2015);
if (vw.isBrandNew) {
    console.log('New car!');
} else {
    console.log('Old car!');
}

console.log(vw.isPremiumModel);
vw.move();

console.log('////');

var jeep = new SuvCar('Jeep', 'Cherokee', 2013, true);

if (jeep.isBrandNew) {
    console.log('New car!');
} else {
    console.log('Old car!');
}

console.log(jeep.isPremiumModel);
jeep.move(15);





