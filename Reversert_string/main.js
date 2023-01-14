/*
Lag et program som kan ta imot en string og så reversere den.
Gjør det i MVC og bruk for loop.
*/



// Model

let reversedString = "";






// View

updateView()
function updateView() {
    let html = /*HTML*/ ` 
    <input type="text" onsubmit="reverseString()">
    `;

    document.getElementById('app').innerHTML = html;
}



// Controller

function reverseString(string) {
    for (let i = string.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    return reversedString;
  }




