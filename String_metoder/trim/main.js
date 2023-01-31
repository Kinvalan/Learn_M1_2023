/*
Fjerner alle 'whitespaces' (mellomrom) som evt befinner seg etter siste bokstav/tegn eller før første tegn.

let text = '    Terje is cool   ';
text = text.trim()
text blir da 'Terje is cool' uten de mellomrommene før og etter
*/


// Model

let text = "    Sebastian er kul    ";

let textWithoutSpaces = text.trim();






// View



updateView()
function updateView() {
    let html = /*HTML*/ `
    <button onclick="showText()">Vis original tekst og original tekst tekst uten mellomrom i konsollen</button>
    `;

    document.getElementById('app').innerHTML = html;
}





// Controller

function showText() {
    console.log(text);
    console.log(textWithoutSpaces);
    updateView();
}


