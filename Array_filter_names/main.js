/*
Bruk .filter() til å filtrere 

Vis så dette på siden.
*/


// Model

const names = ['Frida', 'Isak', 'Theo', 'Elisa'];

const result = names.filter(filterNames);


// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <ul>
        ${result.map(name => `<li>${name}</li>`).join('')}
    </ul>
    `;

    document.getElementById('app').innerHTML = html;
}



// Controller

function filterNames(name) {
    return name.includes('i');
    updateView();
}


