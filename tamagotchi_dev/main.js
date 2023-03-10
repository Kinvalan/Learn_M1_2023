
// Model - dataene våre (let, const)

let hunger = 100;
let cleanliness = 100;
let mood = 100;
let myInterval = setInterval(subtractOne, 500);
let petName = "";
let running = true;



// View - det vi ser/html

updateView();
function updateView() {
  let html = /*HTML*/ `
  <div id="bildeKontainer" class="bildeKontainer">
  <img id="kaninBilde" class="kaninBilde" src="img/bunny.png" alt="kaninbilde">
  </div>
  <div id="progressBarKontainer" class="progressBarKontainer">
  <div>
  <progress id="feedingBar" class="feedingBar" value='${hunger}' max="100"></progress> <br>
  <button class='knapp' onclick="feed()" >feed da wabbit</button> 
  </div>
  <div>
  <progress id="cleaningBar" class="cleaningBar"value='${cleanliness}' max="100"></progress> <br>
  <button class='knapp' onclick="clean()" >clean da wabbit</button>
  </div>
  <div>
  <progress id="moodBar" class="moodBar"value='${mood}' max="100"></progress> <br>
  <button class='knapp' onclick="play()" >play with da wabbit</button>
  </div>
  </div>
  <p id="petNameText">Ta godt vare på ${petName}!</p>
    `;

  document.getElementById("app").innerHTML = html;
}



// Controller - det som endrer på dataene våre (funksjoner)



function feed() {
  if (running == true){ 
    hunger = hunger + 10;
    if (hunger > 100) {
      hunger = 100;
    }
  }
 
  updateView();
}

function clean() {
  if (running == true){
    cleanliness = cleanliness + 10;
    if (cleanliness > 100) {
      cleanliness = 100;
    }
  }
  
  updateView();
}

function play() {
  if (running == true){
    mood = mood + 10;
    if (mood > 100) {
      mood = 100;
    }
  }
  
  updateView();
}

function subtractOne() {
  cleanliness--;
  hunger--;
  mood--;
  gameOver();
  updateView();
}

function gameOver() {
  if (cleanliness == 0 || hunger == 0 || mood == 0) {
    clearInterval(myInterval);
    running = false;
    console.log("heihei")
    alert(petName + ' døde. Fornøyd?');
  }
  
  updateView();
}

petName = prompt("Hva skal kjæledyret ditt hete?")


//ting vi kan gjøre videre i tamagotchi: 

/*
- Få en tekst over hver bar, f.eks. hunger.

- Legge til prompt for å velge navn  <- gjør dette 
*/