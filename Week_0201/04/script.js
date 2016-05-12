var a = 1,
    b = 3,
    c = -4;


if (a === 0) {
    console.log('It\'s a linear equasion.');
} else {
    // discriminant
    var D = Math.pow(b, 2) - 4 * a * c;

    console.log('It\'s a quadratic equation can have 0, 1 or 2 real solutions.');
    
    if (D < 0) {
        console.log('The quadratic equation has no real solutions.');
    } else if (D === 0) {
        console.log('The quadratic equation has one solution x = ' + (-(b / (2 * a))) + '.');
    } else if (D > 0) {
        console.log('The quadratic equation has two solution x1 = ' + 
            ((-b + Math.sqrt(D)) / (2 * a)) + ' and x2 = ' +
            ((-b - Math.sqrt(D)) / (2 * a)) + '.');
    }
}