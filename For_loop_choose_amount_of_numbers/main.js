/*
Oppgave: 
Skriv en JavaScript-funksjon som tar et tall som input
og skriver ut alle tallene fra 1 til det inngitte tallet, med en for-løkke.
*/


// Model






// View

// Antall tall som blir skrevet i konsollen bestemmes av hvilket tall man sender med som argument i onclicken under.

updateView()
function updateView() {
    let html = /*HTML*/ `
    <button onclick="writeNumbers(100);">Trykk for å se alle tallene som brukes i koden i konsollen</button>
    `;

    document.getElementById('app').innerHTML = html;
}



// Controller


function writeNumbers(number) {
    for(let i = 1; i <= number; i++){
        console.log(i);
    }
    updateView();
}





