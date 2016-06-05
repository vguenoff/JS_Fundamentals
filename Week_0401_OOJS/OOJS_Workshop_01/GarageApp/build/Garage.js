'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Garage = function () {
    'use strict';

    var MIN_NAME_LENGTH = 3;
    var MAX_NAME_LENGTH = 40;
    var MIN_LIMIT_VALUE = 0;
    var MAX_LIMIT_VALUE = 100;
    var VEHICLE_TYPES = ['car', 'truck', 'bike', 'bus'];
    var _vehicles = [];

    var Garage = function () {
        function Garage(name, limit, typeOfVehicles) {
            _classCallCheck(this, Garage);

            this.name = name;
            this.limit = limit;
            this.typeOfVehicles = typeOfVehicles;
        }

        _createClass(Garage, [{
            key: 'addVehicle',

            // whithout setter so it won't me modified
            value: function addVehicle(vehicle) {
                if (this.vehiclesCount === this.limit) {
                    throw new Error('Garage is already full. The limit is ' + this.limit);
                }
                _vehicles.push(vehicle);
            }
        }, {
            key: 'removeVehicle',
            value: function removeVehicle() {}
        }, {
            key: 'name',
            get: function get() {
                return this._name;
                // return this._name + ' Sofia';          
            },
            set: function set(value) {
                if (typeof value !== 'string' || !isNaN(value * 1)) {
                    throw new Error('Name must be string.');
                } else if (value.length < MIN_NAME_LENGTH) {
                    throw new Error('Name has invalid length. Name is too short.');
                } else if (value.length > MAX_NAME_LENGTH) {
                    throw new Error('Name has invalid length. Name is too long.');
                }
                this._name = value;
            }
        }, {
            key: 'limit',
            get: function get() {
                return this._limit + ' Sofia';
            },
            set: function set(limitValue) {
                if (typeof limitValue !== 'number') {
                    throw new Error('Limit value should be a number.');
                } else if (limitValue < MIN_LIMIT_VALUE) {
                    throw new Error('Limit value cannot be below ' + MIN_LIMIT_VALUE + '.');
                } else if (limitValue > MAX_LIMIT_VALUE) {
                    throw new Error('Limit value cannot exceed ' + MAX_LIMIT_VALUE + '.');
                }
                this._name = limitValue;
            }
        }, {
            key: 'typeOfVehicles',
            get: function get() {
                return this._typeOfVehicles.toUpperCase();
            },
            set: function set(value) {
                if (VEHICLE_TYPES.indexOf(value.toLowerCase()) < 0) {
                    throw new Error(value + ' is not a valid vehicle type. Valid vehicle types are ' + VEHICLE_TYPES.join(' | '));
                }
                this._typeOfVehicles = value;
            }
        }, {
            key: 'vehiclesCount',
            get: function get() {
                return _vehicles.length;
            }
        }]);

        return Garage;
    }();

    return Garage;
}();

var bpGarage = new Garage('BPSF', 20, 'Car');

for (var i = 0; i < 23; i++) {
    bpGarage.addVehicle('vw' + (15 - i));
}

console.log(bpGarage);
console.log(bpGarage.vehiclesCount);
console.log(bpGarage.name);
console.log(bpGarage.vehiclesCount);
console.log('test test');