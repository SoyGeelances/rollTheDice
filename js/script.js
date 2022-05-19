'use strict';
//GLOBAL ELEMENTS
const valorPlayer1 = document.querySelector("#number-player1");
const valorPlayer2 = document.querySelector("#number-player2");
const textoP1 = document.querySelector("#player1");
const textoP2 = document.querySelector("#player2");
const current1 = document.querySelector(".left-current-number");
const current2 = document.querySelector(".right-current-number");
const imgDice = document.querySelector("#diceId");
const rollDice = document.querySelector(".roll-dice-butt");
const holdButt = document.querySelector(".hold-butt");
const newGameButt = document.querySelector(".new-game-butt");
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");

//NEW GAME
newGameButt.addEventListener("click", function reseter() {
    v1 = 0;
    v2 = 0;
    textoP1.textContent = "PLAYER 1";
    textoP1.classList.remove("win-style");
    valorPlayer1.textContent = 0;
    textoP2.textContent = "PLAYER 2";
    textoP2.classList.remove("win-style");
    valorPlayer2.textContent = 0;
    rollDice.disabled = false;
    nextPart();
})

//CHANGE GAMERS
function ChangeGamers() {
    if (box1.classList.contains("active")) {
        box1.classList.remove("active");
        box2.classList.add("active");
    } else {
        box2.classList.remove("active");
        box1.classList.add("active");
        
    } 
}

//WINNER?
function itWins(Vplayer) {
    if (Vplayer > 50 && Vplayer == v1) {
        textoP1.textContent = "YOU WIN!!"
        textoP1.classList.add("win-style");
        rollDice.disabled = true;

    } else if (Vplayer > 50 && Vplayer == v2) {
        textoP2.textContent = "YOU WIN!!"
        textoP2.classList.add("win-style");
        rollDice.disabled = true;
    } 
}

//STARTING CONDITIONS
function nextPart() {
    document.querySelector(".left-current-number").textContent = 0;
    c1 = 0;
    document.querySelector(".right-current-number").textContent = 0;
    c2 = 0;
}

let c1 =Number(current1.textContent);
let c2 = Number(current1.textContent);
let v1 =Number(valorPlayer1.textContent);
let v2 = Number(valorPlayer2.textContent);

//ROLL DICE
rollDice.addEventListener('click', function rollDice() {
    //create ramdon number
    const diceNumber = Math.floor(Math.random() * (7 - 1)) + 1;
    //put number in source
    imgDice.src = `/img/${diceNumber}.png`;
    //remove class
    imgDice.classList.remove("hidden");

    if (diceNumber !== 1) {
        //add up current
        if (box1.classList.contains("active")) {
            c1 += diceNumber;
            document.querySelector(".left-current-number").textContent = c1;
        } else if (box2.classList.contains("active")) {
            c2 += diceNumber;
            document.querySelector(".right-current-number").textContent = c2;
        }

    } else if (diceNumber == 1) {
        ChangeGamers();
        nextPart();
    }
});

//HOLD FUNCTIONS

holdButt.addEventListener('click', function HoldPoints() {
    if (box1.classList.contains("active")) {
        v1 += c1;
        valorPlayer1.textContent = v1;
        itWins(v1);
        nextPart();
        ChangeGamers();
    } else if (box2.classList.contains("active")){
        v2 += c2;
        valorPlayer2.textContent = v2;
        itWins(v2);
        nextPart();
        ChangeGamers();
    } 
})




