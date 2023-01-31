/*
Om vi ønsker å hente ut en del av en string, kan man gjøre det ved hjelp av metoden substring(). 
Substring() forventer to parametre -> startindex og sluttindex av stringen man ønsker å hente ut.

Feks:

Vi har teksten "Terje is cool" og ønsker å hente navnet på personen ut fra denne tekst-stringen.
Start-indexen blir da 0, fordi vi vet navnet alltid er i begynnelsen av stringen,
men vi ønsker å sikre oss at funksjonen vår fungerer for alle navn som kan være i den setningen,
ikke kun Terje, så vi ønsker ikke hardkode slutt-indexen. 

Vi kan da løse det på denne måten:

 let text = 'Terje is cool';
 let indexOfIs = text.indexOf('is');
 text.substring(0,indexOfIs);

Vi vet at ordet 'is' alltid kommer etter navnet, så vi finner først indexen der dette ordet starter 
-> som blir vår sluttindex til substring funksjonen vår!
*/


// Model

let fullName = "Sebastian Møller";



// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <button onclick="getFirstName()">Logg fornavn</button>
    <button onclick="getLastName()">Logg etternavn</button>

    `;

    document.getElementById('app').innerHTML = html;
}




// Controller


function getFirstName() {
    console.log(fullName.substring(0, 9));
    updateView();
}

// Siden vi vil at etternavnet skal slutte på den siste bokstaven vi har,
// kan vi skrive (9) for der vi vil etternavnet skal starte og så vil den gå helt til tekstens slutt.
// DVS at vi vil se hele etternavnet selvom vi bare har (9).


function getLastName() {
    console.log(fullName.substring(9));
    updateView();
}


