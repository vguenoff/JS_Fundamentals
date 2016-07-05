// TODO ES2015 OOJS version (with styling)

(function(){
    'use strict';
    
    // variables 
    let submit = document.getElementById('submit'),
        firstName = document.getElementById('firstName'),
        lastName = document.getElementById('lastName'),
        years = document.getElementById('years'),
        firstNameValidated = false,
        lastNamevalidated = false,
        yearsValidated = false,
        checkbox = document.getElementsByClassName('checkbox');

    console.log(checkbox);

    function validateName(name) {
        if((name.value.search(/[^a-zA-Z]+/)) === -1 && (name.value !== '')) {
            if(name === firstName) {
                checkbox[0].innerHTML = '&#10004;';
                checkbox[0].style.color = 'green';
                firstNameValidated = true;
            } else {
                checkbox[1].innerHTML = '&#10004;';
                checkbox[1].style.color = 'green';
                lastNamevalidated = true;
            }
            console.log('Valid entry!');
        } else {
            if(name === firstName) {
                checkbox[0].innerHTML = '&#x2717;';
                checkbox[0].style.color = 'red';
                firstNameValidated = false;
            } else {
                checkbox[1].innerHTML = '&#x2717;';
                checkbox[1].style.color = 'red';
                lastNamevalidated = false;
            }
            console.log('Invalid entry!');
        }
    }   
    function validateYears() {
        let yeVal = parseInt(years.value);
        if((yeVal >= 18) && (yeVal <= 54) && !isNaN(yeVal)) {
            checkbox[2].innerHTML = '&#10004;';
            checkbox[2].style.color = 'green';
            console.log('Valid entry!');
            yearsValidated = true;
        } else {
            checkbox[2].innerHTML = '&#x2717;';
            checkbox[2].style.color = 'red';
            yearsValidated = false;
            console.log('Invalid entry!');
        }
    }
    // event listeners
    firstName.addEventListener('blur', function(){
        validateName(firstName);
    });
    lastName.addEventListener('blur', function(){
        validateName(lastName);
    });
    years.addEventListener('blur', validateYears);
    submit.addEventListener('click', function(){
        if(firstNameValidated & lastNamevalidated & yearsValidated) {
            alert('Valid entry!');
        } else {
            alert('Error!');
        }
    });
}());