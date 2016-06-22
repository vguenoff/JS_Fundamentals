var Garage = (function() {
    'use strict';

    const MIN_NAME_LENGTH = 3;
    const MAX_NAME_LENGTH = 40;
    const MIN_LIMIT_VALUE = 0;
    const MAX_LIMIT_VALUE = 100;
    const VEHICLE_TYPES = ['car', 'truck', 'bike', 'bus'];
    let _vehicles = [];

    class Garage {
        constructor(name, limit, typeOfVehicles) {
            this.name = name;
            this.limit = limit;
            this.typeOfVehicles = typeOfVehicles;
        }

        get name() {
            return this._name;            
            // return this._name + ' Sofia';            
        }
        set name(value) {
            if(typeof(value) !== 'string' || !isNaN(value*1)) {
                throw new Error('Name must be string.');
            } else if(value.length < MIN_NAME_LENGTH) {
                throw new Error('Name has invalid length. Name is too short.');
            } else if (value.length > MAX_NAME_LENGTH){
                throw new Error('Name has invalid length. Name is too long.');

            }
            this._name = value;
        }
        get limit() {
            return this._limit + ' Sofia';            
        }
        set limit(limitValue) {
            if(typeof(limitValue) !== 'number') {
                throw new Error('Limit value should be a number.');
            } else if(limitValue < MIN_LIMIT_VALUE) {
                throw new Error(`Limit value cannot be below ${MIN_LIMIT_VALUE}.`);
            } else if (limitValue > MAX_LIMIT_VALUE){
                throw new Error(`Limit value cannot exceed ${MAX_LIMIT_VALUE}.`);
            }
            this._name = limitValue;
        }
        get typeOfVehicles() {
            return this._typeOfVehicles.toUpperCase();            
        }

        set typeOfVehicles(value) {
            if(VEHICLE_TYPES.indexOf(value.toLowerCase()) < 0) {
                throw new Error(`${value} is not a valid vehicle type. Valid vehicle types are ${VEHICLE_TYPES.join(' | ')}`);
            }
            this._typeOfVehicles = value;
        }
        get vehiclesCount() {
            return _vehicles.length;
        }
        // whithout setter so it won't me modified
        addVehicle(vehicle) {
            if(this.vehiclesCount === this.limit) {
                throw new Error(`Garage is already full. The limit is ${this.limit}`);
            }
            _vehicles.push(vehicle);
        }
        removeVehicle() {

        }
    }

    return Garage;
    
}());

let bpGarage = new Garage('BPSF', 20, 'Car');

for(let i = 0; i < 23; i++) {
    bpGarage.addVehicle('vw' + (15 - i));
}

console.log(bpGarage);
console.log(bpGarage.vehiclesCount);
console.log(bpGarage.name);
console.log(bpGarage.vehiclesCount);
console.log('test test');






















