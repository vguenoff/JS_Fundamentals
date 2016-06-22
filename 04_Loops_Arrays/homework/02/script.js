var numList = [],
    currentSequence = [],
    sortedSequence,
    longestSequence,
    count = 0;

// init the list
for(let i = 0; i < 10; i++) {
    numList.push(parseInt(Math.random()*5));
}

console.log(`Our list of numbers is ${numList}.`);

// find when sequence
for(let i = 0; i < numList.length; i++) {
    currentSequence.push([]);

    if((numList[i] === numList[i + 1])) {
        currentSequence[count].push(numList[i]);
    } else if(numList[i] === numList[i - 1]) {
        currentSequence[count].push(numList[i]);
        if (numList[i] !== numList[i + 1]) {
            count++;            
        }
    } else {  
        count++;            
    }
}
console.log(currentSequence);

// sort sequence
sortedSequence = currentSequence.sort(function(a, b) { return a.length - b.length; });
console.log(sortedSequence);

// find the longest sequence
longestSequence = sortedSequence[sortedSequence.length-1];
console.log(`The longest sequence is ${longestSequence}.`);