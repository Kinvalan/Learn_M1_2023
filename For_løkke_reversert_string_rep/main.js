/*
Skriv en funksjon som tar en tekststreng som input og returnerer tekststrengen reversert.
*/


// Model

let text = '';



// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <input onchange="setAsText(this.value)" type="text">
    <br><br>
    Reversert tekst: ${reverseString(text)}
    `;

    document.getElementById('app').innerHTML = html;
}



// Controller

function setAsText(inputText) {
    text = String(inputText);
    updateView();
}



function reverseString(text) {
    let reversedText = '';
    for(let i = text.length - 1; i >= 0; i--){
        reversedText += text[i];
    }
    return reversedText;
    //updateView();
}


