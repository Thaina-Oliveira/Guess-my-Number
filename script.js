'use strict';

// Game logic
let randomGuess = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// function to display messages throughout the game.
const displayMessage = function (message){
    document.querySelector(".message").textContent = message;
}


document.querySelector(".check").addEventListener('click', function(){
    const guess = Number(document.querySelector(".guess").value);


    // when there is no input 
    if(!guess){
        displayMessage("🚫 No Number!");

        // when player sets a number higher than 20 or bellow 1 (like a negative number)
    } else if(guess > 20 || guess < 1){
        displayMessage( "🚫 Please, insert a valid number from 1 to 20!");

        // when player's gess is a different number
    } else if(guess !== randomGuess){

        // the following code will only happens if the score is above 1;
        if(score > 1){
            displayMessage(guess > randomGuess ? "📈 Too high!" : "📉 Too low!") ;
            // decrease the score when the guess is wrong
            score--
            document.querySelector(".score").textContent = score;
        } else{
            displayMessage("😞 You lost the game!") 
            document.querySelector(".score").textContent = 0; 
        }
    

        // when the player wins
    } else if(guess === randomGuess){
        displayMessage("🎉 Correct Number!") ;
        document.querySelector(".number").textContent = randomGuess;

        // changing the background and the number css style once the player wins the game
        document.querySelector("body").style.backgroundColor = "#50C878"
        document.querySelector(".number").style.width = "30rem"

        // set the highscore

        if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } 

    
})

// resetting the game

document.querySelector(".again").addEventListener('click', function(){
    score = 20;
    randomGuess = Math.floor(Math.random() * 20) + 1;
    // changing the backgroung to the original color
    document.querySelector("body").style.backgroundColor = "#222";

    // changing the number width to the original one 
    document.querySelector(".number").style.width = "15rem";

    // changing the number message, number, score and guess to the original one 
    displayMessage("Start guessing...");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
})