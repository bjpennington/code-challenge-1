console.log('js');

let buttonCounter = 0;

$(readyNow);

function readyNow() {
    console.log('jq');
    addEventListeners();
}

function addEventListeners() {
    $('#genButton').on('click', handleGenerate);
    $('#boxZone').on('click', '.swapBtn', handleSwap);
    $('#boxZone').on('click', '.deleteBtn', handleDelete);
}

function handleGenerate () {
    console.log('You clicked it!');
    buttonCounter++;
    let $box = $('<div class="box red"><div>');
    $box.append(`<p>${buttonCounter}</p>`);
    $box.append('<button class="swapBtn">Swap</button>');
    $box.append('<button class="deleteBtn">Delete</button>');
    $('#boxZone').append($box);
}

function handleSwap() {
    console.log('swapped!');
    $(this).closest('div').toggleClass("red yellow");
}

function handleDelete() {
    console.log('deleted!'); 
    $(this).closest('div').remove();  
}