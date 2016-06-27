(function () {
    'use strict';
    var btn = document.getElementById('btn-clickable');

    function onBubbleClick() {
        console.log('Bubble: ' + this.nodeName);
    }
    function onCaptureClick() {
        console.log('Capture: ' + this.nodeName);
    }

    btn.addEventListener('click', onBubbleClick, false);
    btn.addEventListener('click', onCaptureClick, true);

    document.body.addEventListener('click', onBubbleClick, false);
    document.body.addEventListener('click', onCaptureClick, true);
})();