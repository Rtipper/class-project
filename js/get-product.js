'use strict'

// var response = prompt('Do you like the color blue or red better?');
// var message;

// if (response === 'blue') {
// message = 'blue is great!';
// }
// else if (response === 'red') {
//     message = 'red is great!';
// }
// else {
//     message = 'thats a bold choice';
// }

// document.write('<h3>' + message + '</h3>');

function getColors() {
    var response = prompt('Is your favorite color blue or red?');
    var message;

    while(response != 'blue' && response != 'red') {
        message = prompt('Is your favorite color blue or red? BE SPECIFIC!')
    }

    if (response === 'blue') {
    message = 'Blue is great!';
    }
    else if (response === 'red') {
        message = 'Red is great!';
    }
    else {
        message = "That's a bold choice";
    }

    return document.write('<h3>' + message + '</h3>');
}

getColors();