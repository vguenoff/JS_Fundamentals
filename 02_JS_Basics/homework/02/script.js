var a = 3,
    b = 2,
    c = 1;

// with Math.min 
console.log('The smallest number is ' + Math.min(a, b, c) + '.');

// without Math.min 
var smallest = a;

if (b < a && b < c) {
    smallest = b;
} else if (c < a && c < b) {
    smallest = c;
}

console.log('The smallest number is ' + smallest + '.');