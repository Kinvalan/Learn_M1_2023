/*
Split kan dele opp hvert ord/ eller hver del i en tekst inn i nye elementer. 
Disse legges i et såkalt array [] (en samling av data). 
split trenger et parameter for hvilket tegn den skal tolke som 'slutten' på elementet den skal hente ut.

let text = 'Terje is cool';
words= text.split(' ');

I denne settingen ønsker vi å splitte opp tekststrengen for hvert ord. 
Metoden split(' ') tar inn "mellomrom" som tegnet den skal starte på et nytt element.

resultatet blir:

words = ['Terje','is','cool']
words[0] = 'Terje'
words[1] = 'is'
words[2] = 'cool'

Man kan også splitte på lengre elementer, så lenge de skilles med et tegn. Feks:

  let text = 'Terje is cool, Linn is awesome';
  scentences = text.split(',');

Her splitter vi på komma, så resultatet blir:

scentences = ['Terje is cool','Linn is awesome']
scentences[0] = 'Terje is cool'
scentences[1] = 'Linn is awesome'
*/




// Model

let text = "Kebab er digg da"




// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <button onclick="logEachWordInText()">Vis alle ordene i text variablen hver for seg i konsollen</button>
    `;

    document.getElementById('app').innerHTML = html;
}




// Controller


function logEachWordInText() {
    let words = text.split(' ');
    console.log(words);
    updateView();
}


// Etter logEachWordInText() er kjørt, vil vi se: ['Kebab', 'er', 'digg', 'da'] i konsollen.







