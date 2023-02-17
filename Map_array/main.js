

// Model

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];






// View

updateView()
function updateView() {
    let html = /*HTML*/ ` 
    <input type="number" onchange="findArrayNumbers(this.value)">
    `;
    document.getElementById('app').innerHTML = html;
}



// Controller

/* 
.map() kaller en gitt callback funksjon for hver gjenstand i arrayet i rekkefølge 
- og returnerer et array med resultatet.

Programmet antar at det som er etter pila ved newArray.map() skal returneres.
Funksjonen findArrayNumbers tar nå det tallet du skriver inn og ganger det i 10-gangen (fordi arrayet går fra 1 til 10).
*/ 

function findArrayNumbers(number) {
    let searchArray = newArray.map(index => index * number) 
    console.log(searchArray);                                    
    updateView();
}



