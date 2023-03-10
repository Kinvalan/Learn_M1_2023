/*
Oppgave: Lag en funksjon som tar inn navnet og alderen til en person, og
returnerer et objekt som inneholder informasjonen. 

Objektet skal ha to egenskaper: "navn" og "alder".
*/



// Model


let person = {
    name: '',
    age: 0
}

// View


updateView()
function updateView() {
    let html = /*HTML*/ `

    <label>Navn:</label>
    <input onchange="saveUsersName()" id="usersName" type="text">

    <br>

    <label>Alder:</label>
    <input onchange="saveUsersAge()" id="usersAge" type="number">
    
    <br>
    Dette vet vi om deg så langt: 
    <br>
    Ditt navn: ${person.name}
    <br>
    Din alder: ${person.age}
    `;

    document.getElementById('app').innerHTML = html;
}


// Controller

function saveUsersName() {
    person.name = document.getElementById('usersName').value;
    updateView();
}


function saveUsersAge() {
    person.age = document.getElementById('usersAge').value;
    updateView();
}




