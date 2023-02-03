/*
Oppgave:

Lag et array. 

Innholdet i arrayet skal kunne vises en etter en ved hjelp av en for-løkke.

Bruk gjerne console.log().

Jeg leker meg litt
*/



// Model

let fruitArray = ["appelsin", "eple", "pære"];





// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <button onclick="showFruitsWithForOf()">Se alle fruktene i konsollen med for of</button>


    <button onclick="showFruitsWithFor()">Se alle fruktene i konsollen med for</button>


    <button onclick="addFruitToArray()">Legg til en frukt i arrayet</button>
    `;

    document.getElementById('app').innerHTML = html;
}




// Controller

// for of er en måte å gjøre det på i dette tilfellet.

function showFruitsWithForOf() {
    for (fruit of fruitArray) {
        console.log(fruit);
    }

    updateView();
}


function showFruitsWithFor() {
    for(let i = 0; i <= fruitArray.length; i++){
        console.log(fruitArray[i]);
    }
    updateView();
}




function addFruitToArray() {
    fruitArray.push("banan");
    updateView();
}










