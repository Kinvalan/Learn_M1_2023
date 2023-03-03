/*
Bruk .find() metoden til å finne og returnere et av navnene i et array.
*/


// Deklarerer et nytt array med flere navn.

const names = ['Zoro', 'Sanji', 'Luffy'];


// Lager en ny arrow funksjon. Den heter "findName", og tar "name" som parameter. Den returnerer hvis "name" === "Luffy".

const findName = (name) => name === 'Luffy';


// Lager en ny konstant "result" sier den er lik names arrayet sitt find med funksjonen "findName" som parameter.

const result = names.find(findName);


// Ser resultatet i konsollen ved å logge "result".

console.log(result);


// Resultatet ble at "Luffy" ble skrevet til konsollen.






