/*
Funksjonen indexOf() henter ut indexen til en gitt character som finnes i stringen. 
Man kan søke etter en match bestående av en eller flere tegn. 

eks:

let firstName = 'Terje';
firstName.indexOf('e') // returnerer 1 fordi det er den første indexen den finner bokstaven 'e' i. 
*/



// Model

let foodItem = 'eplekake';




// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <button onclick="showFirstInstanceOf()">vis første index med p i eplekake i konsollen</button>
    `;

    document.getElementById('app').innerHTML = html;
}



// Controller


function showFirstInstanceOf() {
    console.log("første index plass med p i eplekake er " + foodItem.indexOf('p'));
    updateView();
}