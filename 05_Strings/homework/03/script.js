var aSentence = 'Напишете JS код, който да заменя всички интервали в даден текст с &nbsp;',
    bSentence = aSentence;

for (let i = 0; i < aSentence.length; i++) {
    bSentence = bSentence.replace(' ', '&nbsp;');
}

console.log(`${aSentence} \n${bSentence}`);