/*
Oppgave:

Lag et program som starter med å vise frem tallet 1.
Lag 4 knapper som skal gjøre følgende:
“doble tallet”, 
“øke tallet med 1”,
”resette tallet til 1”

“lage like mange div`er som man har økt tallet med- som viser frem sitt unike tall i rekken”
Feks: 
du har økt tallet til 5

<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>

Tallet skal ikke kunne overskride verdien 10
*/



// Model

let number = 1

let stopValue = 10;

const newDiv = document.createElement("div");




// View


updateView()
function updateView() {
    let html = /*HTML*/ `
    <div>${number}</div>

    <button onclick="doubleTheNumber()">Doble tallet</button>

    <button onclick="increaseTheNumberBy1()">Øk tallet med 1</button>

    <button onclick="resetTheNumberTo1()">Resett tallet til 1</button>

    <button onclick="addDiv()">Lag like mange DIV-er som antall økninger</button>
    `;

    document.getElementById('app').innerHTML = html;
}


// Controller

function doubleTheNumber() {
    number = number * 2;
    updateView();
}


function increaseTheNumberBy1() {
    number = number + 1;
    updateView();
}


function resetTheNumberTo1() {
    number = 1;
    updateView();
}


function addDiv() {
    for(let i = 1; i <= stopValue; i++) {
        
        newDiv.innerHTML = number;
        
        document.body.appendChild(newDiv);
    }
    updateView();
}




