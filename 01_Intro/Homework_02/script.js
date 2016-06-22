var a = 17,
    prime = true;

for (var i = 2; i < a; i++) {
    if (a % i === 0) {
        prime = false;
        break;
    }
}

console.log( prime ? 'The number is prime.' : 'The number is not prime.' );
