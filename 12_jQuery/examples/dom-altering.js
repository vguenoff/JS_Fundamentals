/* global $*/
(function(){
    let myDIv = $('<div>');
    myDIv.text('jQuery created a div for us');

    $('body').append(myDIv);

    $('<ul><li>Hi!</li></ul>').appendTo('body');
    $('body').prepend('<h1>Site Header</h1>');
    
    debugger;    
    $('ul').remove('#item-list');

}());