/*
Oppgave:

Lag en klasse for en bil, legg til metoder som kan kjøres.

Dette skal kunne vises i konsollen.
*/


/* 
Bruker ikke MVC her. 
Det er pga vi ikke kan deklarere nye biler utifra bil klassen før/over der bil klassen er skrevet.
*/





updateView()
function updateView(){
    let html = /*HTML*/ ` 

    `;

    document.getElementById('app').innerHTML = html;
}







class Bil {
    kjør(){
        console.log("Du kjører bilen");
    }

    brems(){
        console.log("Du tråkker på bremsen");
    }

    tut(){
        console.log("Du tuter med hornet");
    }

    blink(){
        console.log("Du blinker med frontlysene");
    }
}

/*
Man kan kalle på "Bil konstruktøren" dvs "Bil" for hver gang vi trenger en ny bil.
Om det var et spill kunne man gjort det på måten jeg har gjort det under. 
*/

    let spiller1 = new Bil();
    let spiller2 = new Bil();
    let spiller3 = new Bil();
    let spiller4 = new Bil();


    spiller1.kjør();
    spiller2.brems();
    spiller3.tut();
    spiller4.blink();




















