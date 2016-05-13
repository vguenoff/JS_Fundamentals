// var number = 1234, 
//     charList = numing(number).split(''),
//     numList = [],
//     sum = 0;

// console.log(number);
// console.log(charList);

// for(let key of charList) {
//     let i = key - 1;
//     numList.push(Number(charList[i]));
//     sum += numList[i];
// }

// console.log(numList);
// console.log(sum);

var num = '1234',
    sum = 0;

for(let i = 0; i < num.length; i++) {
    sum += parseInt(num[i]);
}

console.log(sum);