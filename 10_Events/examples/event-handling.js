function onSimpleButtonClick() {
    alert('Simple button was clicked');
}

var btn = document.getElementById('btn-clickable');
// btn.onclick = function () {
//     console.log('Advanced button was clicked!');    
// };

btn.addEventListener('click', function () {
    console.log('Advanced button was clicked!'); 
}, false);