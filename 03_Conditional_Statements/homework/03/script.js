var start = 555,
    end = 1555,
    list = [];

while(start <= end) {
    let isPrime = true;

    for (var i = 2; i < start; i++) {
        if (start % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        list.push(start);
    } 
        
    start++;
}

console.log(`The prime numbers between ${start} and ${end} are ${list.join(', ')}.`);
console.log(`The smallest prime number is ${list[0]} and the bigest is ${list[list.length - 1]}.`);
