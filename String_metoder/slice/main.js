/*
Slice fungerer helt likt som substring, eneste forskjell er at man kan bruke negative tall inn som parameter.

Dersom man bruker et negativt tall, starter han bakerst i stringen og teller indexen derfra.

Feks:
----------------------------
let text = 'Terje is cool';
text.slice(-4)
----------------------------

Her går vi bakerst i teksten, og henter ut startindex (-4) ut resten av stringen. 

Resultatet blir da "cool".
*/



// Model

let text = "jeg liker pizza namnam";





// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <button onclick="getText()">vis tekst i konsoll</button>
    `;

    document.getElementById('app').innerHTML = html;
}




// Controller


function getText() {
    console.log(text.slice(-12));
    updateView();
}

// Med den funksjonen over vil "pizza namnam" bli skrevet i konsollen.





