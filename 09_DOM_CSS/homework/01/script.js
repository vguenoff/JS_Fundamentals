(function(){
    'use strict';
    
    let container = document.getElementById('container'),
        dynCreatedDiv = document.createElement('div'),
        dynCreatedP = document.createElement('p');

    dynCreatedP.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
    dynCreatedDiv.appendChild(dynCreatedP);
    container.appendChild(dynCreatedDiv);

}());