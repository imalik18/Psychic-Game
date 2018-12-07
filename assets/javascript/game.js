// This is an array that lists out all of the alphabets
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Creating variable that record the number of wins, losses, guesses left, guesses so far.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessSoFar = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var computerquestionText = document.getElementById("computerquestion-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessSoFarText = document.getElementById("guesssofar-text");
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
// This function is run whenever the user presses a key.
function reset () {
    guessesLeft = 10; 
    $('#guessesleft-text').text("Guesses Left: " + guessesLeft);
    guessSoFar = [];
    $('#guesssofar-text').text(guessSoFar);
    $('#losses-text').text("Losses: " + losses);
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
}
document.onkeypress = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    console.log(userGuess);
    //Randomly chooses a choice from the options array. This is the Computer's guess.
    

    console.log(computerGuess, "computer guess");

    //This logic determines the outcome of the game (win/loss/guesses left/guesses so far).

        if (userGuess.toLowerCase() === computerGuess.toLowerCase()) {
           alert('You Win');
          
            wins++
            console.log(wins, "these are the wins");
            $('#wins-text').html('<div>Wins :' + wins + '</div>')
            reset();

        } else {
            guessesLeft--;
            guessSoFar.push(userGuess);
            $('#guesssofar-text').html(guessSoFar.join(' '));
            $('#guessesleft-text').html('Guesses Left :' + guessesLeft)
        }

        if (guessesLeft === 0) {
            losses++;
            reset();
        }

        if (guessesLeft <= 0) {

            //if guesses are less than 0, the game should reset itself
          
         
             guessesLeft = 0;
             guessSoFar = 0;






            // Display wins/losses/guesses left/guesses so far)
            document.getElementById('wins-text').innerHTML = "wins: " + wins;
            document.getElementById('losses-text').innerHTML = "losses: " + losses;
            document.getElementById('guessesleft-text').innerHTML = "guesses left: " + guessesLeft;
            document.getElementById('guesssofar-text').innerHTML = "Your guesses so far: " + guessSoFar;





            //winsText.textContent = "wins: " + wins;
            //lossesText.textContent = "losses: " + losses;
            //guessesLeftText.textContent = "guesses Left: " + guesses;
            //guessSoFar.textContent = "guesses so far: " + guessesfar;
        }
    
}