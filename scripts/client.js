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
    $box.append('<button class="swapBtn">Swap</button>');
    $box.append('<button class="deleteBtn">Delete</button>');
    $('#boxZone').append($box);
}