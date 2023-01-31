/*
Et program som gjør at man kan skrive inn en tekst i et input-felt og så se antall 'a' i teksten.
Har en variabel som tar vare på antall a-er. 
Variablen vil oppdateres med + 1 per gang checkTextForVocals() funksjonen finner en 'a' i teksten.
*/


// Model

let text = '';
let aCounter = 0;



// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <input id="textInput" type="text">
    <button onclick="checkTextForVocals()">Trykk for å se antall a-er i teksten</button>
        Antall a-er: ${aCounter}
    `;

    document.getElementById('app').innerHTML = html;
}



// Controller


/*
1. Få tak i hvilken tekst du skal sjekke vokalene til

2. Definer en løkke som teller fra 0 til lengden av teksten din (text.length)

3. i løkken må du ha en if-sjekk som sjekker om
   bokstaven som ligger på indexen til telleren (text.charAt(i)) er lik en vokal

Feks:

if(text.charAt(i) == 'a'){
  //her må man øke en telleVariabel - feks aCounter++;
}
*/


// Vi setter text lik verdien til tekst inputet vårt først.

function checkTextForVocals() {
    text = document.getElementById('textInput').value;

    for(let i = 0; i <= text.length; i++){
        if(text.charAt(i) == 'a'){
            aCounter++;
        }
    }
    updateView();
}




