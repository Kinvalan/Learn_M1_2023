/*
Oppgave:

Lag en klasse for en bil, legg til metoder som kan kjøres.

Dette skal kunne vises i konsollen.
*/


/* 
Bruker ikke MVC her. 
Det er pga vi ikke kan deklarere nye biler utifra bil klassen før/over der bil klassen er skrevet.
*/









class Bil {

    constructor(modell, år, farge){
        this.modell = modell;
        this.år = år;
        this.farge = farge;
    }



    kjør(){
        console.log("Du kjører bilen");
    }

    brems(){
        console.log("Du tråkker på bremsen");
    }

}

/*
Man kan kalle på "Bil konstruktøren" dvs "Bil" for hver gang vi trenger en ny bil.
Om det var et spill kunne man gjort det på måten jeg har gjort det under. 
*/

    let bil1 = new Bil("Mustang", 2018, "blå");
    let bil2 = new Bil("Corvette", 1996, "gul");
   

/*
Med console.log-ene under henter vi egenskaper fra bilene (lagt til over) og viser dem i konsollen.
*/

    console.log(bil1.modell);
    console.log(bil2.år);


/* 
- Her får vi brukt metodene vi har laget for "bil".
- Vi bruker console.log() i metodene så vi vil få opp den teksten vi har valgt når vi kjører metodene.
*/

    bil1.kjør();
    bil2.brems();





















