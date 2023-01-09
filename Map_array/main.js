

// Model

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];






// View

updateView()
function updateView() {
    let html = /*HTML*/ ` 
    <input type="text" onchange="findArrayNumbers(this.value)">
    `;
    document.getElementById('app').innerHTML = html;
}



// Controller

/* 
Programmet antar at det som er etter pila i newArray.map() / arrow-funskjonen under skal returneres.

Funksjonen findArrayNumbers tar nå det tallet du skriver inn og ganger det i 10-gangen (fordi arrayet går fra 1 til 10).

Skriver vi => index == number og un-commenter if else-ene, vil koden sjekke om det vi skreiv i inputet er i arrayet.
Den vil samtidig si med tekst om arrayet inneholder det vi tallet vi skreiv i inputet eller ikke.
*/ 

function findArrayNumbers(number) {
    let searchArray = newArray.map(index => index * number)

    // if (searchArray) {
    //     console.log("Arrayet inneholder " + number);
    // }

    // else {
    //     console.log("Fant ikke " + number + " i arrayet");
    // }

    console.log(searchArray);
    updateView();
}



