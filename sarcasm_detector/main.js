/*
Jeg skal lage en sarkasme deteketor.
For å øve på funksjoner, variabler og if/else.

1. lager et input
2. lager en variabel for teksten og en for output
3. lage en funksjon som vi skal bruke til å sjekke om teksten er sarkatisk eller ikke.
    - Er teksten sarkatisk, vil vi avsluttte den med '...'
    - Er den ikke sarkastisk vil den IKKE ha '...' i slutten av setningen.
*/



// Model

let output;
let text;



// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <input id="textInput" type="text" onchange="detectSarcasm()">
    <div id="resultDiv">Result here:</div>
    `;

    document.getElementById('app').innerHTML = html;

    document.getElementById('textInput').addEventListener('change', updateText);
}



// Controller

function updateText(){
    text = "";
    text = document.getElementById('textInput').value;
    detectSarcasm(text);
}        


function detectSarcasm(text) {

    let includesSarcasm = text.includes('...');

    if(includesSarcasm){
        // Oppdaget sarkasme
        output = "Sarcasm detected";
    }

    else { 
        // Ingen sarkasme oppdaget
        output = "No sarcasm detected";

    }
    
    document.getElementById('resultDiv').innerHTML = output;


    /* 
    Ingen updateView() her pga. det ville resette innholdet i app div-en og inputfeltet.
    Det skjer hver gang sarkasme blir oppdaget eller ikke oppdaget.
    */
}







