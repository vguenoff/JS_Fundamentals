(function(){
    'use strict';
    
    // variables 
    let submit = document.getElementById('submit'),
        firstName = document.getElementById('firstName'),
        lastName = document.getElementById('lastName'),
        years = document.getElementById('years');

    // function definition 
    function validateForn() {
        if((firstName.value.search(/[^a-zA-Z]+/) === -1) && 
           (lastName.value.search(/[^a-zA-Z]+/) === -1) &&
           (years.value >= 18 && years.value <= 54)) {
            alert('Valid entry!');
        } else {
            alert('To make a valid entry, pls use only upper and lowercase letters for the first and last name. Also the age must be between 18 and 54 years!');
        }
    }

    // event listeners
    submit.addEventListener('click', validateForn, false);

}());