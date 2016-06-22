(function(){
    'use strict';

    function returnNumName(num = 0){
        let numNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
            // for readability
            n = num.toString();
        
        return console.log(numNames[n[n.length - 1]]);
    }

    returnNumName(912879812379815);
}());