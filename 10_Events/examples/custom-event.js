var customEvent = new CustomEvent('tripleClick'),
    body = document.getElementsByTagName('body')[0],
    btn = document.getElementById('btn-clickable'),
    counter = 0;

// Attach Custom Event to DOM
body.addEventListener('tripleClick', function () {
    alert('You triggered the custom event "Triple Click"');
}, false);


btn.addEventListener('click', function () {
    counter++;
    if (counter == 3) {
        // Trigger the custom event when the condition is present
        body.dispatchEvent(customEvent);
        counter = 0;
    }

    setInterval(function() {
        counter = 0;
    }, 2000);
}, false);