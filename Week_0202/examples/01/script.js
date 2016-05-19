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
    sum = 0,
    numList = [];

for(let i = 0; i < num.length; i++) {
    let a = parseInt(num[i]);
    sum += a;
    numList.push(a);
}

console.log(sum);
console.log(numList);