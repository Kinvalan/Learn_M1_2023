/*
Bruk .map() til å gange tallene i numberArray med 10.

Det nye arrayet skal være numerene til det gamle arrayet ganget med 10.
*/


// Model 


const numberArray = [4, 2, 20, 8, 100, 70];

const newValues = numberArray.map(value => value * 10);



// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    
    `;

    document.getElementById('app').innerHTML = html;
}


// Controller

function showNewValues() {
    console.log(newValues);
}

showNewValues();


