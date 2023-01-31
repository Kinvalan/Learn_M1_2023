/*
Metoden toLowerCase() gjør om alle bokstaver til små bokstaver.

eks:
----------------------------
let text = 'Terje is cool';
text = text.toLowerCase()
resultat: 'terje is cool'
----------------------------

Metoden toUpperCase() skifter alle bokstaver til stor- bokstav. 

eks:
----------------------------
let text = 'Terje is cool';
text = text.toUpperCase()
resultat: 'TERJE IS COOL'
----------------------------
*/



// Model

let text1 = "Jeg liker One Piece";

let text2 = "Jeg liker Spy X Family";




// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <button onclick="setText1ToUpperCase()">Vis tekst1 og tekst1 i store bokstaver i konsollen</button>

    <button onclick="setText2ToLowerCase()">Vis tekst2 og tekst2 i små bokstaver i konsollen</button>

    `;

    document.getElementById('app').innerHTML = html;
}




// Controller

/*
 I setTextToUpperCase() funksjonen logger vi først text som er "Jeg liker One Piece"
 Så bestemmer vi at en ny variabel upperCaseText = text.toUpperCase()
 Hvis vi logger upperCaseText nå vil vi først se den originale teksten og så den nye i kun store i bokstaver.
*/

function setText1ToUpperCase() {
    console.log(text1);
    let upperCaseText = text1.toUpperCase();
    console.log(upperCaseText);
    updateView();
}


function setText2ToLowerCase() {
    console.log(text2);
    let lowerCaseText = text2.toLowerCase();
    console.log(lowerCaseText);
    updateView();
}



