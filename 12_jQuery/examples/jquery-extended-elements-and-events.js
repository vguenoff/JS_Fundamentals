/* global $*/
let init = function(){
    'use strict';

    let list = $('#item-list');
    console.log(list);

    list.addClass('custom-class');
    
    // $('.content').fadeOut(2000);

    $('#second-li').addClass('black-border').css('background-color', 'yellow');

    $('body').prepend($('<h1>').addClass('manually-added').html('<strong>Strong out</strong>'));

    console.log($('h1.manually-added').html());
    console.log($('h1.manually-added').text());

    $('h1.manually-added').html('<em>I am italized</em>');
    $('h1.manually-added').text('<em>I am italized</em>');

    $('a.btn').on('click', function (e) {
        e.preventDefault();
        $('.hello').addClass('manually-added');
    });
};

$(document).ready(function() {
    init();
});