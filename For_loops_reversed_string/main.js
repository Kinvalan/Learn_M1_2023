/*
For å repetere/lære om for-loops

Nå skal jeg snu alle bokstavene i en string.
*/


// Model

let text = "Pizza er digg";

let reversedText = "";





// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <p>Original teksten er "Pizza er digg"</p>
    <button onclick="reverseText()">Trykk for å se reversert tekst i konsollen</button>
    `;

    document.getElementById('app').innerHTML = html;
}



// Controller


/*
Jeg bruker en for-løkke til å reversere teksten sånn:

Starter løkka fra den siste indeksen i teksten.

Jobber jeg meg tilbake til den første indeksen, ved å legge til hvert tegn i en variabel.

Denne variabelen lager jeg for å lagre den reverserte strengen. 
*/

function reverseText() {

    for(let i = text.length - 1; i >= 0; i--){
        reversedText += text[i];
    }

    console.log(reversedText);

    updateView();
}





