(function(){
    'use strict';
        
    let btn = document.getElementById('btn');

    btn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log(e);
    });

}());