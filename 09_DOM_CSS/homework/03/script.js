(function(){
    'use strict';

    function getSolution(className) {
        let divs = document.querySelectorAll('div.' + className),
            div = document.createElement('div');

        div.className += ' added';

        for (let i = 0; i < divs.length; i++) {
            let element = divs[i];

            if((i + 1) % 2 === 0) {
                div.id = 'added-' + (i + 1);
                div.textContent = 'lorem ipsum';
                element.appendChild(div.cloneNode(true));
            }
        }
    }

    getSolution('wanted');

}());