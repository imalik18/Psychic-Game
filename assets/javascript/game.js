// This is an array that lists out all of the alphabets
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Creating variable that record the number of wins, losses, guesses left, guesses so far.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessSoFar = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
var computerquestionText = document.getElementById("computerquestion-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessSoFarText = document.getElementById("guesssofar-text");

// This function is run whenever the user presses a key.
document.onkeypress = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    //Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

    console.log(computerGuess)

    //This logic determines the outcome of the game (win/loss/guesses left/guesses so far).

    if (userGuess === computerGuess) {
        wins++;
    } else {
        guessesLeft--;
    }

    if (guessesLeft = 0) {
        losses++;
    }

    // Display wins/losses/guesses left/guesses so far)
    // document.getElementById('wins').innerHTML = "Wins: " + wins;
    // document.getElementById('losses').innerHTML = "Losses: " + losses;
    // document.getElementById('guesses').innerHTML= "Guesses Left: " + guesses;

    .winsText.textContent = "wins: " + wins;
    .lossesText.textContent = "Losses: " + losses;
    .guessesLeftText.textContent = "Guesses Left: " + guesses;
    .guessSoFar.textContent = "Guesses so far: " + guessesfar;
} 