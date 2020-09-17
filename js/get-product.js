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

function getProduct() {
    var response = prompt('Is your favorite color blue or red?');
    var item;

    while(response != 'blue' && response != 'red') {
        response = prompt('Is your favorite color blue or red? BE SPECIFIC!')
    }
        if (response === 'blue') {
        item = '<img src="/images/Sky-Blue-Square-.jpg">';
    }   else if (response === 'red') {
        item = '<img src="/images/redsquare.png">';
    }

    return item;
}

// helper function
function getCount() {
    var count = prompt('Great! How many would you like?');
    while(isNaN(count) || count === '') {
        count = prompt('Please enter a number. How many would you like?');
    }
    return count;
}

function showOrder() {
    var result = '';
    var itemType = getProduct();
    var total = getCount();

    for(var i = 0; i < total; i++) {
        result = result + '<p>' + itemType + '</p>';
    }

    return document.write(result);

}

showOrder();