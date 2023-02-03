/*
Lag en funksjon som summerer alle tall vi har som er over 20.
*/



// Model


let sum = 0;


// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    
    `;

    document.getElementById('app').innerHTML = html;
}


// Controller

function sumNumbersAbove20(){
    for(let i = 21; i <= 100; i++){
        sum += i;
    }
    console.log(sum);

    updateView();
}

sumNumbersAbove20();


