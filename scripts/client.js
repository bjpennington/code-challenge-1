console.log('js');

let buttonCounter = 0;

$(readyNow);

function readyNow() {
    console.log('jq');
    addEventListeners();
}

function addEventListeners() {
    $('#genButton').on('click', handleGenerate);
}

function handleGenerate () {
    console.log('You clicked it!');
    buttonCounter++;
    let $box = $('<div class="box"><div>');
    $box.append(`<p>${buttonCounter}</p>`);
    $('#boxZone').append($box);
}