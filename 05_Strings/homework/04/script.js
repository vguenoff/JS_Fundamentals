var aSentence = 'Напишете JS код, който ескейпва HTML тагове в даден текст. Напр. <span>Message</span>',
    bSentence = aSentence;

for (let i = 0; i < aSentence.length; i++) {
    bSentence = bSentence.replace('<', '&lt;');
    bSentence = bSentence.replace('>', '&gt;');
}

console.log(`${aSentence} \n${bSentence}`);