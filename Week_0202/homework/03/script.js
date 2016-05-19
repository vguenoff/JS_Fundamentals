var numList = [],
    sortedList,
    repeated = {},
    mostRepeated,
    count = 1;

// init the list
for(let i = 0; i < 10; i++) {
    numList.push(parseInt(Math.random()*10));
}

console.log(`Our list of numbers is ${numList}.`);

sortedList = numList.sort(function(a, b) { return a - b; });
console.log(sortedList);

for(let i = 0; i < numList.length; i++) {
    
    if(numList[i] === numList[i + 1]) {
        count++;
        repeated[numList[i]] = count;
    } else {
        count = 1;
    }
}

console.log(repeated);

// sort the repeated numbers
mostRepeated = Object.keys(repeated).sort(function(a, b){ return repeated[a] - repeated[b]; });
console.log(`Our most repeated number is ${mostRepeated[mostRepeated.length-1]}.`);