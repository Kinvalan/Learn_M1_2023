/*
Lag et program som kan ta imot en string og så reversere den.
Gjør det i MVC og bruk for løkke.
*/



// Model


/*
Vi deklarerer variabler:
 - for teksten som skrives inn
  og
 - for resultatet/den reverserte teksten
*/

let originalText = "";
let result = "";





// View

/*
Vi setter opp standard View
Input:
- Lager et input hvor brukeren skal skrive inn teksten som skal reverseres/originalText
- Inputet får id textInput. Det er for å kunne sette originalText = inputet sin verdi.
- Det gjør at det man skriver inn i inputet blir lagra som inputet sin verdi.

button:
- Lager en knapp som kjører reverseTheString() funksjonen når den trykkes på.

<p></p>:
- Lager en paragraph tag for å kunne vise en tekst.
- Gir denne en id=output for å kunne sette denne taggen lik result variablen.
- Bidrar til at man kan se resultatet på siden.

*/

updateView()
function updateView() {
    let html = /*HTML*/ ` 
    <input id="textInput" type="text">
    <button onclick="reverseTheString()">Reverser teksten</button>
    <p id="output"></p>
    `;

    document.getElementById('app').innerHTML = html;
}

/*
Lager en funksjon som skal reversere teksten vi skriver inn
- OriginalText settes lik elementet som har id=textInput sin verdi. Det er inputet vårt.

for:
- Lager en for løkke.
- Startvariablen settes lik teksten som skrives inn sin lengde - 1.
- Løkka kjører så lenge "i" er større eller lik 0.
- Løkka minsker med 1 per runde.

Inne i løkka sier vi at resultatet settes lik resultatet + teksten med index på "i". 

result:
- Så settes p taggen med id=output sitt innhold lik result.
- Da vil innholdet i p taggen settes lik result.
- Så det som lagres i result vil bli vist i p taggen, og da kan vi se resultatet på siden.
*/


// Controller

function reverseTheString() {
  originalText = document.getElementById('textInput').value;

    for (let i = originalText.length - 1; i >= 0; i--) {
      result += originalText[i];
    }
    document.getElementById('output').innerHTML = result;
  }




