/*
Lag en arrow funksjon som tar to parametre 
og returnerer en hilsen med disse (fornavn og etternavn)
*/



// Model

let userAge = 17;


// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    `;

    document.getElementById('app').innerHTML = html;
}


// Controller

// Arrow-funksjon som tar imot to parametre, sender så hva jeg vil av verdi når jeg kjører funksjonen.

let greetingFunction = (firstName, surName) => {
    console.log(firstName, surName);
}

greetingFunction('Sebastian', 'Møller');

// -------------------------------------------------------------


// Arrow-funksjon som et uttrykk

/*
 Sjekker userAge sin verdi.

 Er userAge = 17 eller mindre, vil du se: 'Du er for ung' i konsollen.

 Er userAge = 18 eller mer, vil du se: 'Du er gammel nok' i konsollen.
*/


let ageChecker = (userAge < 18) ?
() => console.log('Du er for ung') :
() => console.log('Du er gammel nok');

ageChecker();





