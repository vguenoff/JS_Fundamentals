(function(){
    'use strict';

    function countStr(text, searchingFor, sensitiveSearch = false){
        let strCount = 0;

        for (let i = 0; i < text.length; i++) {
            let tempStr = text.substring(i, i + searchingFor.length);
            
            if (!sensitiveSearch && tempStr.toLowerCase() === searchingFor.toLowerCase()){
                strCount++;
            } else if(sensitiveSearch && tempStr === searchingFor) {
                strCount++;
            }
        }        

        console.log(`The string "${searchingFor}" has been found ${strCount} times in the sentence: \n${text}`);
    }

    countStr('The String global object is a constructor for strings, or a sequence of characters.', 'str', true);
}());