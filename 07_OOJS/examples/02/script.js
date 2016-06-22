String.prototype.repeat = function(count) {
    var pattern = this,
        str = '';

    if(!count) {
        return pattern;
    }

    for(var i = 0; i < count; i++) {
        str += pattern;
    }

    return str;
};

String.prototype.capitalize = function() {
    return this.toUpperCase();
};


console.log('wiga '.repeat(3));
console.log('wiga '.capitalize());