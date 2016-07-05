(function(){
    'use strict';

    let container = $('#container');
    console.log(container);

    let content = $('.content');
    console.log(content);

    let first = $('li').first();
    console.log('first', first);

    let second = first.next(); 
    console.log('second', second);

    console.log('third', second.next());
    console.log('first', second.prev());

    let node = $('.special');
    console.log(node.parent().attr('id'));
    console.log(node.parents('#container').attr('id')); 

}());