function createImagesPreviewer(selector, items) {
    'use strict';

    let container = document.querySelector(selector),
        // preview
        previewImg = document.createElement('div'),
        previewTitle = document.createElement('h2'),
        // thumbnails
        imgContainer = document.createElement('div'),
        // arrows
        leftArrow = document.createElement('div'),
        rightArrow = document.createElement('div'),
        currentImg = 0;

    // preview img 
    previewImg.style.width = '90%';
    previewImg.style.height = '480px';
    previewImg.style.background = `url(${items[0].url}) center / cover`;
    previewImg.style.margin = '0 auto';
    previewTitle.innerText = items[0].title;
    container.appendChild(previewImg);
    
    // preview title
    previewTitle.style.font = 'bold small-caps 4em Helvetica, Arial, sans-serif';
    previewTitle.style.margin = '0';
    previewTitle.style.padding = '0 0.2em';
    previewTitle.style.opacity = '0.5';
    previewTitle.style.color = 'cyan';
    previewImg.appendChild(previewTitle);

    // img container
    imgContainer.style.width = '90%';
    imgContainer.style.margin = '1% auto';
    imgContainer.style.background = 'rgb(255, 255, 251)';
    container.appendChild(imgContainer);

    // clear current class name
    function clearClass(){
        for (let i = 0; i < items.length; i++) {
            document.getElementsByClassName(`animal${i}`)[0].classList.remove('current');
        }
    }

    // img item
    for (let i = 0; i < items.length; i++) {
        let imgItem = document.createElement('div');
        imgItem.style.width = imgItem.style.height = '100px';
        imgItem.style.margin = '1.5%';
        imgItem.style.display = 'inline-block';
        imgItem.style.background = `url(${items[i].url}) center / cover`;
        imgItem.style.borderRadius = '2%';
        imgItem.style.cursor = 'pointer';
        imgItem.className = `animal${i}`;

        imgItem.addEventListener('click', function(){
            previewImg.style.background = `url(${items[i].url}) center / cover`;
            previewTitle.innerText = items[i].title;
            currentImg = i;
            clearClass();
            imgItem.classList.add('current');
        }, false);
        imgContainer.appendChild(imgItem);
    }
    document.getElementsByClassName('animal0')[0].classList.add('current');

    // arrows
    leftArrow.style.position = rightArrow.style.position = 'absolute';
    leftArrow.style.overflow = rightArrow.style.overflow = 'hidden';
    leftArrow.style.userSelect = rightArrow.style.userSelect = 'none';
    leftArrow.style.top = rightArrow.style.top = '165px';
    leftArrow.style.width = rightArrow.style.width = '4%';
    leftArrow.style.left = rightArrow.style.right = '3%';
    leftArrow.style.height = rightArrow.style.height = '185px';
    leftArrow.style.background = rightArrow.style.background = 'magenta';
    leftArrow.style.cursor = rightArrow.style.cursor = 'pointer';
    leftArrow.innerHTML = '<h1 style="position: absolute; top: -28px; left: 3px; font-size: 6em; user-select: none;"><</h1>';
    rightArrow.innerHTML = '<h1 style="position: absolute; top: -28px; right: 3px; font-size: 6em; user-select: none;">></h1>';

    container.appendChild(leftArrow);
    container.appendChild(rightArrow);

    // preview updater
    function updatePreview() {
        previewImg.style.background = `url(${items[currentImg].url}) center / cover`;
        previewTitle.innerText = items[currentImg].title;
        clearClass();
        document.getElementsByClassName(`animal${currentImg}`)[0].classList.add('current');
    }
    // arrows event listeners
    leftArrow.addEventListener('click', function(){
        if(currentImg>0 && currentImg<items.length) {
            currentImg--;
            updatePreview();            
        }
    }, false);
    rightArrow.addEventListener('click', function(){
        if(currentImg>=0 && currentImg<items.length-1) {
            currentImg++;
            updatePreview();            
        }
    }, false);
}