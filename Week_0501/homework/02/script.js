(function(){
    'use strict';

    function addUlToDiv(id, arr) {
        let ul = document.createElement('ul');

        for (let i = 0; i < arr.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = arr[i];
            li.className = 'list-item';
            li.style.color = 'brown';
            li.style.backgroundColor = '#EEFFAF';
            li.style.border = '1px solid red';
            ul.appendChild(li);
        }
        
        document.getElementById(id).appendChild(ul);
    }

    addUlToDiv('container', ['Saab', 'Volvo', 'BMW']);

}());