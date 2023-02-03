/*
Lag et program som bruker for of løkke til å printe ut hver enkelte bokstav i en string.

Programmet skal ha en knapp og et input. 
Den teksten som blir skrevet inn der når man trykker på knappen
vil vises bokstav for bokstav i konsollen.
*/


// Model

let text = "";



// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <h1>Skriv inn tekst i inputet, åpne konsollen, trykk på knappen og så se teksten bli printa der.</h1>
    <h2>Den vil bli printa bokstav for bokstav</h2>

    <input id="textInput" type="text">
    <button onclick="printTextInSingleLetters()">Vis hver bokstav enkeltvis i konsollen</button>
    `;

    document.getElementById('app').innerHTML = html;
}


// Controller


function printTextInSingleLetters() {
    text = document.getElementById('textInput').value;

    for(letter of text){
        console.log(letter);
    }
    updateView();
}




