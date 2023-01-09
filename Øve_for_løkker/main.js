/*
Oppgave:

Vi har et array "numberArray"

Lag et program som printer alle tallene vi har i arrayet vårt til siden (én og én) når vi trykker på en knapp.


*/



// Model

let numberArray = [5, 34, 9, 71, 87, 4, 43];




// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <button onclick="showArray()">Trykk her for å se tallene i arrayet</button>
    `;
    document.getElementById('app').innerHTML = html;
}




// Controller


function showArray() {
    for(let i = 0; i <= numberArray.length; i++){
        console.log(`${numberArray[i]}`);
    }

    updateView();
}


