/*
Lag et array med verdiene til ting du har i en handlekurv.
Bruk foreach til å plusse sammen disse verdiene til å bli en total.
*/

// lager et handlevogn array

let total = 0;
const cart = [31, 44, 12, 12, 16];


// lager en funksjon

const addValuesTogether = (value) => total += value;



// Bruker foreach og passer arrow-funksjonen som argument

cart.forEach(addValuesTogether);


// console.log 

console.log('Totalen blir: ' + total + ' kr');


