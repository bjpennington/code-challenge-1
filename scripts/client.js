// initialize buttonCounter as a global variable
let buttonCounter = 0;

$(readyNow);

// initialize jQuery
function readyNow() {
    addEventListeners();
}

// add event listeners for buttons
function addEventListeners() {
    $('#genButton').on('click', handleGenerate);
    $('#boxZone').on('click', '.swapBtn', handleSwap);
    $('#boxZone').on('click', '.deleteBtn', handleDelete);
}

function handleGenerate () {
    //increase button click count
    buttonCounter++;

    // initialize base div variable
    let $box = $('<div class="box red"><div>');

    // add button click count to div
    $box.append(`<p>${buttonCounter}</p>`);

    // add swap button to div
    $box.append('<button class="swapBtn">Swap</button>');

    // add delete button to div
    $box.append('<button class="deleteBtn">Delete</button>');

    // append div to DOM
    $('#boxZone').append($box);
}

function handleSwap() {
    // toggle both red and yellow classes for box divs
    $(this).closest('div').toggleClass("red yellow");
}

function handleDelete() { 
    // remove box div delete button belongs to
    $(this).closest('div').remove();  
}