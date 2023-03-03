/*
Du har fått en liste over tall. 

Din oppgave er å skrive en funksjon findOddNumber(numbers) som tar inn en liste med tall og
returnerer det første oddetallet som finnes i listen.
*/

const numberArray = [2, 4, 7, 8, 10, 11];

const OddNumber = (numberArray) => numberArray == 7;

const result = numberArray.find(OddNumber);

console.log(result);