var aSentence = 'The String global object is a constructor for strings, or a sequence of characters.',
    strCount = 0,
    searchingFor = 'str';

for (let i = 0; i < aSentence.length; i++) {
    let tempStr = aSentence.substring(i, i + searchingFor.length);
    if (tempStr.toLowerCase() === searchingFor.toLowerCase()){
        strCount++;
    }
}

console.log(`The string "${searchingFor}" has been found ${strCount} times in the sentence: \n${aSentence}`);