// var animal = {
//     makeNoise: function() {
//         console.log('The ' + this.type + ' makes noise "' + this.noise + '"');
//     }
// };


// var dog = (function(parent) {

//     var dog = Object.defineProperties(parent, {
//         type: {
//             value: 'dog'
//         },
//         noise: {
//             value: 'djaf-djaf-djaf'
//         },
//         bark: {
//             value: function() {
//                 console.log('Bark, Bark');
//             }
//         }
//     });

//     return dog;
// }(animal));

// dog.makeNoise();

// !!! rewrite - > the best ES5.1 way!!!

var cat = (function() {
    var cat = Object.create({});

    Object.defineProperty(cat, 'init', {
        value: function(name, type, city) {
            this.name = name;
            this.type = type;
            this.city = city;

            return this;
        }
    });

    Object.defineProperty(cat, 'type', {
        // value: 'domestic',
        get: function() {
            return this._type;
        },
        set: function(value) {
            if (value.length < 3) {
                throw new Error('Type cannot be less than 3 symbols');
            }

            this._type = value;
        },
        enumerable: false,
        configurable: true
    });

    Object.defineProperty(cat, 'name', {
        value: 'Pooh',
        writable: true, // the property is writable by equation notation =
        enumerable: true
    });

    Object.defineProperty(cat, 'city', {
        get: function() {
            return this._city;
        },
        set: function(value) {
            if (value.length < 3) {
                throw new Error('City cannot be less than 3 symbols');
            }

            this._city = value;
        },
        enumerable: true,
        configurable: false
    });

    return cat;
})();

var cat1 = cat.init('Pooh', 'tiger', 'sofia');
console.log(cat1);

for (let key in cat) {
    console.log(`${key} --> ${cat[key]}`);
}

cat.name = 'Gergana';
cat.city = 'plovdiv';
console.log(cat);

cat.name.enumerable = true;
cat.city.enumerable = false;
for (let key in cat) {
    console.log(`${key} --> ${cat[key]}`);
}