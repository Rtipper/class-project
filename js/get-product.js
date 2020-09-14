'use strict'

var response = prompt('Do you like the color blue or red better?');
var message;

if (response === 'blue') {
message = 'blue is great!';
}
else if (response === 'red') {
    message = 'red is great!';
}
else {
    message = 'thats understandable';
}

document.write('<h3>' + message + '</h3>');