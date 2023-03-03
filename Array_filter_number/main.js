/*
Bruk .filter() metoden til å filtrere ut tall større enn eller lik 100.

Vis så disse tallene på siden.
*/




// Model

const numbers = [35, 74, 69, 134, 4, 289, 100];

const result = numbers.filter(showResult);





// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <p>
        Vi har et array kalt "numbers". Tallene som er over eller likt 100 derfra er: 
        <br>
            ${result}
        <br/>
    </p>
    `;

    document.getElementById('app').innerHTML = html;
}



// Controller

function showResult(number) {
    return number >= 100;
    updateView();
}





