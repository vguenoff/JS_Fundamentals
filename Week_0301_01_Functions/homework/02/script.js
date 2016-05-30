(function(){
    'use strict';

    function countStr(string, searchingFor, sensitiveSearch = false){
        let strCount = 0;

        for (let i = 0; i < string.length; i++) {
            let tempStr = string.substring(i, i + searchingFor.length);
            
            if (!sensitiveSearch && tempStr.toLowerCase() === searchingFor.toLowerCase()){
                strCount++;
            } else if(sensitiveSearch && tempStr === searchingFor) {
                strCount++;
            }
        }        

        return console.log(`The string "${searchingFor}" has been found ${strCount} times in the sentence: \n${string}`);
    }

    countStr('The String global object is a constructor for strings, or a sequence of characters.', 'str', true);
}());