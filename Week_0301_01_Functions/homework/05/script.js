(function(){
    'use strict';

    function findSentеnce(str) {
        return str.replace(/\. /gi, '.\n');
    }

    console.log(
        findSentеnce('The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. This method does not change the String object it is called on. It simply returns a new string.')
    );
}());