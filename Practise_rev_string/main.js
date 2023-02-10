


// Model - hva vil kunne variere?


let originalText; 

let reversedText = '';



// View - hva vil vi se?


updateView()
function updateView() {
    let html = /*HTML*/ `
    <input onchange="reverseTheText()" id="textInput" type="text">
    `;

document.getElementById('app').innerHTML = html;
}




// Controller - hva skal skje med det som kan variere?



/*
Lag en funksjon som tar imot en tekststreng og
returnerer teksten med hvert ord i teksten skrevet baklengs.
*/


function reverseTheText() {
   originalText = document.getElementById('textInput').value;

    for(let i = originalText.length - 1; i >= 0; i--){   // noe vi vil skal skje flere ganger
        reversedText += originalText[i];
    }

    console.log(reversedText);

    updateView();
}








