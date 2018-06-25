console.log('js');

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
}