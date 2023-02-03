
// Model 

// hva kan variere?

let originalText = "";
let result = "";




// View

// hvordan skal siden se ut? - hva trenger vi?

updateView()
function updateView() {
    let html = /*HTML*/ `
    <input id="inputField" type="text" >
    <button onclick="reverseTheText()">Reverser teksten</button>
    <p id="output"></p>
    `;
    document.getElementById('app').innerHTML = html;
}



// Controller

// hva skal skje med det som kan variere?
/*
Det som skal endres er på venstre side av likhetstegnet.

- Vi vil at originalText skal endres.
originalText settes derfor lik inputet med id="inputField" sin verdi.

inputet med id="inputField" sin verdi settes IKKE lik originalText.
*/

function reverseTheText() {
    originalText = document.getElementById('inputField').value;

    for(let i = originalText.length - 1; i >= 0; i--){
        result += originalText[i];
    }
    document.getElementById('output').innerHTML = result;
}


/*
Å skrive updateView() i reverseTheText()-funksjonen.

- Når du gjør det, vil du tømme innholdet i document.getElementById('app') og
 fylle det på nytt med HTML-koden fra updateView(). 

- Dette vil føre til at verdien av result som er satt i reverseTheText(), vil bli tømt.
- Da vil vi ikke se den reverserte koden på siden, så vi skriver ikke updateView her.
*/


