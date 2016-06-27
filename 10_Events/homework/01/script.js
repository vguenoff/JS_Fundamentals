(function(){
    'use strict';
    
    // variables 
    let btn = document.getElementById('clickable'),
        plusBtn = document.getElementById('plusBtn'),
        minusBtn = document.getElementById('minusBtn'),
        div = document.getElementsByTagName('div')[0],
        p = document.getElementsByTagName('p')[0],
        pFontSize = 1;

    // function definitions 
    function changeColor() {
        // change the color with random one and output the hex
        div.style.background = div.innerText = '#'+Math.floor(Math.random()*16777215).toString(16);
    }
    function updateFontSize() {
        p.style.fontSize = pFontSize + 'em';
    }
    function increaseFont() {
        pFontSize += 0.1;
        updateFontSize();
    }
    function decreaseFont() {
        pFontSize -= 0.1;
        updateFontSize();
    }

    // event listeners
    btn.addEventListener('click', changeColor, false);
    plusBtn.addEventListener('click', increaseFont, false);
    minusBtn.addEventListener('click', decreaseFont, false);

}());