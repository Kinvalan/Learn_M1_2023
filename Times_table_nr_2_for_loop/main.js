/*
Bruk en for-løkke til å printe ut 2-gangen
resultatet bør da liste ut tallene:
2,4,6,8,10,12,14,16,18,20
*/


// Model

// Deklarerer en variabel for hvor telleren i for løkka skal slutte, her er det på 20.

let stopValue = 20;




// View

// Bruker ikke view her pga resultatet vises heller i konsollen.

updateView()
function updateView() {
    let html = /*HTML*/ `
    
    `;

    document.getElementById('app').innerHTML = html;
}



// Controller

/*
Lager en ny funksjon "printTimesTableNr2()".
- Den skal vise to gangen i konsollen.

- For å slippe å skrive at funksjonen skal printe ut tall etter tall bruker vi en for løkke.
- Først deklarerer vi en startvariabel/teller ("i"), den får verdien 2.
- Vi sier at løkka skal kjøre så lenge "i" er mindre enn eller lik stopValue (20).
- Så sier vi at det som skal skje med startvariabelen ("i") er at 2 legges til i "i" for hver gang løkka kjører.

- Inne i løkka logger vi ut "i" for å se hva som skjer.

- Så kjører vi funksjonen rett i scriptet, da vil vi se det som skjer inne i konsollen.
*/

function printTimesTableNr2() {
    for(let i = 2; i <= stopValue; i += 2){
       console.log(i);
    }
    //updateView();
}

printTimesTableNr2();
