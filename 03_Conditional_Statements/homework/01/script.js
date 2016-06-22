var start = 3,
    end = 81,
    list = [];

while(start <= end) {
    start++;
    if(start % 3 === 0) {
        list.push(start);
    }
}

console.log(list.join(', '));