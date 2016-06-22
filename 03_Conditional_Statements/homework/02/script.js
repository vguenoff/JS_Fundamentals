var abcd = 1000,
    end = 9999,
    luckyNumbers = [];

while(abcd <= end) {
    let d = abcd % 10,
        c = (abcd % 100 - d) / 10,
        a = parseInt(abcd / 1000),
        b = parseInt(abcd / 100) - (a * 10);

    if((a + b) === (c + d)) {
        luckyNumbers.push(abcd);
    }
    // console.log(abcd, a, b, c, d);
    abcd++;
}

console.log(`The lucky numbers between 1000 and 9999 are ${luckyNumbers.join(', ')}.`);