/*
Lag en funksjon som generer 2 random tall så lenge tallene er ulike fra hverandre. 

Når de er like print ut teksten "Equal numbers found" - samt hvilke tall det ble =)

kan eventuelt også console.log() tallene for hver runde

OBS: Nettleseren er ikke glad i å oppdatere view mens i en while-loop!
*/



// Model

let firstNumber;

let secondNumber;




// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    
    `;

    document.getElementById('app').innerHTML = html;
}


// Controller

//Lag en funksjon som generer 2 random tall så lenge tallene er ulike fra hverandre. 

//Når de er like print ut teksten "Equal numbers found" - samt hvilke tall det ble =)


/*
Grunnen til at vi bruker en do while og ikke while:

Fordi en do-while løkke sørger for at koden innenfor løkka utføres minst en gang, selv om betingelsen til slutt er falsk. 
- Dette er ønskelig når man vil generere to tilfeldige tall. 

En while løkke vil ikke utføre koden innenfor løkka hvis betingelsen fra starten av er falsk. 
- Derfor er en do-while løkke mer egnet for dette tilfellet.
*/

function generateTwoRandomNumbers() {
   do {
        firstNumber = Math.floor(Math.random() * 10) + 1;
        secondNumber = Math.floor(Math.random() * 10) + 1;

        if(firstNumber === secondNumber){
            console.log('Like tall funnet, det er: ' + firstNumber)
        }
        break; 

   } while (firstNumber === secondNumber)

   console.log('Tall nummer en: ' + firstNumber);
   console.log('Tall nummer to: ' + secondNumber);

   updateView();
}

generateTwoRandomNumbers();


/*
Jeg bruker break for å bryte ut av do-while løkka når de tilfeldige tallene er like.
Når de er like, har vi funnet det vi leter etter, og det er ikke lenger nødvendig å fortsette å generere nye tall.

Ved å bryte ut av løkka vil programmet hoppe over resten av koden innenfor løkka, og fortsette å utføre koden rett etter løkka. 
Dette vil sørge for at programmet ikke går i en uendelig løkke.
*/





