/*
Oppgave:
Nå prøver vi ut "map" metoden i arrays.

Lag et program som ganger alle verdiene i et array med 10.

- Lag en knapp, når den trykkes på skal resultatet vises i konsoll-vinduet. 
*/



/*
Info:

Syntaks:

array.map(function(currentValue, index, arr), thisValue)

-----------------------------------------------------------
Parameterne:
------------

Parameter: function()
Beskrivelse: Påkrevd. En funksjon som skal kjøres for hvert array-element.

Parameter: currentValue
Beskrivelse: Påkrevd. Verdien av det gjeldende elementet.

Parameter: index
Beskrivelse: Valgfritt. Indeksen til det gjeldende elementet.


Parameter: arr
Beskrivelse: Valgfritt. Arrayet til det gjeldende elementet.

Parameter: thisValue
Beskrivelse: Valgfritt. Standardverdi udefinert.
En verdi som sendes til funksjonen som skal brukes som denne verdien.
*/




// Model

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];





// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <button onclick="mapMethod()">Se alle elementente i numberArray ganget med 10 i konsollen</button>
    `;

    document.getElementById('app').innerHTML = html;
}




// Controller


// Funksjon for å gange alle elementene i numberArray med 10: 

function mapMethod(){
    numberArray.map(timesTen([numberArray]));
    console.log(numberArray);
    updateView();
}

function timesTen(){
    for(number of numberArray){
        number * 10
    }
    updateView();
}








