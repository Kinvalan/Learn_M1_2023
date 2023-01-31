/*
Øve på funksjoner.

Lager et program som kan ta i mot fornavn, etternavn, og adresse og så vise det på siden.

Lager ett input-felt for hver variabel.

Så lage en knapp som vil vise verdien til alle variablene etter at brukeren har skrevet inn info
(når man trykker på den).
*/


// Model

let firstName;

let surName;            

let countryName;

let cityName;

let streetName;

let streetNumber;



// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <form>
        <label>Fornavn:</label>
        <input class="inputField" id="firstNameInput" type="text" >

        <label>Etternavn:</label>
        <input class="inputField" id="surNameInput" type="text" >


        <label>Land:</label>
        <input class="inputField" id="countryNameInput" type="text">

        <label>By:</label>
        <input class="inputField" id="cityNameInput" type="text">

        <label>Gate:</label>
        <input class="inputField" id="streetNameInput" type="text">

        <label>Gatenummer:</label>
        <input class="inputField" id="streetNumberInput" type="text">

        <button type="button" onclick="showData()">Vis data</button>
    </form>

    <p id="output"></p>
    `;

    document.getElementById('app').innerHTML = html;
}


// Controller


function showData() {

    let firstName = document.getElementById('firstNameInput').value;

    let surName = document.getElementById('surNameInput').value;
    
    let countryName = document.getElementById('countryNameInput').value;
    
    let cityName = document.getElementById('cityNameInput').value;
    
    let streetName = document.getElementById('streetNameInput').value;
    
    let streetNumber = document.getElementById('streetNumberInput').value;  
    
    document.getElementById('output').innerHTML = /*HTML*/ `
    Hei, ${firstName}  ${surName}. Vi ser du bor i ${countryName}, ${cityName} 
    i ${streetName} nr. ${streetNumber}. Takk for informasjonen, den ligger på darkweb allerede ;)
    `;
}


