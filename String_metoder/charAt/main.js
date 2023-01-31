
// Dette er for å skjønne mer om string-metoder, her ser jeg på charAt.


/*
String har mange innebygde metoder.

Man kan kalle på string metodene slik:

------------------------------
let firstName = 'Sebastian';
firstName.charAt(0)
------------------------------

charAt() henter ut tegnet/bokstaven på en gitt indeks.
Den indeksen er verdien man sender inn som parameter til metoden.

Hvis vi tar kode eksempelet igjen, ser vi at vi har 0 som parameter, dvs at vi skal finne tegnet på index 0.
firstName.charAt(0) vil da returnere bokstaven 'S'.

Nå leker jeg meg litt med charAt()
*/


// Model

let streetAdress = 'Rosendalsgata';






// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <button onclick="getAdressLetter()">Vis første bokstav av gatenavnet i konsollen</button>
    `;

    document.getElementById('app').innerHTML = html;
}




// Controller

function getAdressLetter() {
   console.log(streetAdress.charAt(0));
}



