(function(){
    'use strict';

    let divs = document.getElementsByTagName('div');

    console.log(divs);
    console.log(divs instanceof Array);
    console.log(divs instanceof HTMLCollection);

    for(let i in divs) {
        console.log(`divs:${i} = ${divs[i]}`);
    }


}());