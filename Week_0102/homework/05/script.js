var number = 213,
    ones = number % 10,
    tens = number % 100 - ones,
    hundreds = Math.floor(number / 100);
    // hundreds = Number(String(number)[0]);

console.log('We\'re assuming the number must be a 3 digit integer.');
// console.log(number, hundreds, tens, ones);

var textTranslator = {
     1: 'one',
     2: 'two',
     3: 'three',
     4: 'four',
     5: 'five',
     6: 'six',
     7: 'seven',
     8: 'eight',
     9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
};

if (number < 100 || number > 999) {
    console.log('Error. The number is not a 3 digit integer.');
} else {
    var tensOutput;
    if ((tens + ones) < 20) {
        tensOutput = textTranslator[ones + tens];
    } else if (ones === 0) { 
        tensOutput = textTranslator[tens];
    } else {
        tensOutput = textTranslator[tens] + ' ' + textTranslator[ones];
    }
    console.log('The text representation of the number ' + number + ' is "' + 
        textTranslator[hundreds] + ' hundred and ' + tensOutput + '".');
}
