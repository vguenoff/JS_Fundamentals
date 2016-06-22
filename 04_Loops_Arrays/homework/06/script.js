var numList = [];

// init the list
for(let i = 0; i < 10; i++) {
    numList.push(i * i + i);
}

console.log(numList);

function binarySearch(array, targetValue) {
    let min = 0,
        max = array.length - 1,
        guess;

    while(min <= max) {
        guess = Math.floor((max + min) / 2);

        if (array[guess] === targetValue) {
            console.log(guess);
            return guess;
        }
        else if (array[guess] < targetValue) {
            min = guess + 1;
        }
        else {
            max = guess - 1;
        }

    }
    return -1;
}

binarySearch(numList, 56);