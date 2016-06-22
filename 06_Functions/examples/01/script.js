function printLogo(a) {
    console.log(a);
}

// printLogo('Printed');

function printArguments() {
    let args = [].slice.apply(arguments);
    for(let i in args) {
        console.log(args[i]);
    }
}

// printArguments(1, 2, 3, 4);

// mimickinng overloading
function printText(num, text) {
    switch(arguments.length) {
    case 1: 
        console.log(`Number: ${num};`); 
        break;
    case 2: 
        console.log(`Number: ${num};`);
        console.log(`Text: ${text};`);
        break;
    }
}

// printText(1);
// printText(2, 'two');

// default parameters
function calculateSurface(a = 5, b = 8) {
    return a * b;
}

// console.log(calculateSurface());
// console.log(calculateSurface(4, 5));

// closure
function outer(x) {
    function inner(y) {
        return x + ' ' + y;
    }
    return inner;
}

// var semple = outer('IT');
// console.log(semple('Academy'));

// IIFE immediately invoked function expression 

(function(){
    'use strict';

    console.log('Hello from the IIFE.');
}());

// recursion

function fact(n) {
    if (n === 0) {
        return 1;
    }

    return n * fact(n - 1);
}

console.log(fact(5));













