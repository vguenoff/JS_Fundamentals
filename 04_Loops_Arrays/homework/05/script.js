var numList = [],
    biggerNum;

// init the list
for(let i = 0; i < 10; i++) {
    numList.push(parseInt(Math.random()*10));
}

console.log(`Our list of numbers is ${numList}.`);

for(let j = 0; j < numList.length; j++) {
    for(let k = 0; k < numList.length-1; k++) {
        if(numList[k + 1] > numList[k])  {
            biggerNum = numList[k + 1];
            numList[k + 1] = numList[k];
            numList[k] = biggerNum;
        }
    }
}
console.log(`Our bubble sorted list of numbers is ${numList}.`);
