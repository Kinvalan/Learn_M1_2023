/*
Replace er noe man kan bruke dersom man har noe i en tekststring man ønsker å bytte ut med noe annet.

eks:
-----------------------------------------
let text = 'Terje is cool';
newText = text.replace('Terje','Marie');
console.log(text)
console.log(newText)
-----------------------------------------

Om man kjører kodelinjene overfor vil text fremdeles være 'Terje is cool', mens newText har verdien 'Marie is cool'. 
Teksten endrer seg altså ikke av å kalle på metoden direkte, men metoden returnerer resultatet.

Dersom man ønsker å endre teksten til å være den nye verdien etter replace er kjørt må man si:

--------------------------------------
text = text.replace('Terje','Marie');
--------------------------------------

Det er verdt å merke seg at replace kun erstatter første treff den finner,
så dersom utgangspunktet mitt var teksten 'Terje is cool Terje', ville resultatet av den bli 'Marie is cool Terje'.

Dersom man ønsker å erstatte alle stedene i teksten som matcher med søkefiltreringen vår kan en bruke replaceAll()
*/




// Model

let originalText = "Koding er kjedelig";

let newText = originalText.replace('kjedelig','gøy');




// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <button onclick="showText()">Vis tekst</button>
    `;

    document.getElementById('app').innerHTML = html;
}




// Controller


function showText() {
    console.log(originalText + ' <-- original tekst');
    console.log(newText + ' <-- ny tekst' );
    updateView();
}






