(function(){
    'use strict';

    function calcNumbers(a = 0, b = 0, operation) {
        switch(operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '%':
            return a % b;
        default:
            return 'Error. Pls enter a valid operator.';
        }
    }

    console.log(
        calcNumbers(5, 4, '+'),
        calcNumbers(5, 4, '-'),
        calcNumbers(5, 4, '*'),
        calcNumbers(5, 4, '/'),
        calcNumbers(5, 4, '%'),
        calcNumbers(5, 4, '//')
    );

    // another way with OOJS
    Number.prototype.addition = function(b) {
        let a = this;
        return a + b;
    };
    Number.prototype.subtract = function(b) {
        let a = this;
        return a - b;
    };
    Number.prototype.multiplicate = function(b) {
        let a = this;
        return a * b;
    };
    Number.prototype.devide = function(b) {
        let a = this;
        return a / b;
    };
    Number.prototype.modulus = function(b) {
        let a = this;
        return a % b;
    };

    let num = 5;

    console.log(
        num.addition(4),
        num.subtract(4),
        num.multiplicate(4),
        num.devide(4),
        num.modulus(4)
    );
    
}());