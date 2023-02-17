





// Model



// Lag et array med tallene 1 til 10 (inkludert).

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Oddetallene her = 1, 3, 5, 7, og 9.



// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <h2>Sjekk konsollen for resultat</h2>
    `;

    document.getElementById('app').innerHTML = html;
}





// Controller


// Bruk filter()-metoden til å opprette et nytt array som inneholder bare de oddetallene fra det opprinnelige arrayet.

// Skriv ut det nye arrayet til konsollen.


const sortOddNumbers = (numbers) => {
    const oddNumbers = numbers.filter(number => number % 2);
    console.log(oddNumbers);
    updateView();
}

console.log(sortOddNumbers(numberArray));


/*
Modulusoperatøren (%) gir oss resten av en divisjon. 
I denne funksjonen brukes modulusoperatøren til å sjekke om et tall er et oddetall eller ikke.

Hvis et tall er et oddetall, vil det ikke være delelig med 2, 
og det vil være en rest når man utfører en divisjon med 2. 
Derfor kan vi bruke modulusoperatøren med argumentet 2 (number % 2) for å finne ut om et tall er et oddetall.

Hvis resten av denne divisjonen er 1, betyr det at tallet er et oddetall, 
og hvis resten er 0, betyr det at tallet er et partall. 
Så ved å bruke modulusoperatøren på hvert tall i listen, 
kan vi filtrere ut oddetallene og lagre dem i en ny liste.
*/