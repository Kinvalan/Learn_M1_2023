/*
Du har fått en liste med tall fra 1 til 10, 
og du ønsker å lage en ny liste hvor hvert tall i den opprinnelige listen er doblet. 

Bruk map() metoden til å løse dette problemet.
*/



const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const double = (number) => number * 2;

const numbersDoubled = numberArray.map(double);

console.log(numbersDoubled);



/*
"const double" definerer en konstant variabel som inneholder funksjonen.

"number" er parameteret som funksjonen tar inn. 

Når map() metoden kaller funksjonen på hvert element i lista, vil parameteret "number" bli erstattet med verdien av det aktuelle elementet i lista.

"=>" skiller parameteret fra selve funksjonen.

"number * 2" er selve funksjonen, som tar inn et tall (number) og returnerer tallet doblet.

Så, når map() metoden kaller double() funksjonen på hvert element i lista,
vil den aktuelle verdien i lista bli erstatta med number, og funksjonen vil returnere verdien av number doblet. 

Dermed vil vi ende opp med en ny liste hvor hvert tall er doblet.
*/








