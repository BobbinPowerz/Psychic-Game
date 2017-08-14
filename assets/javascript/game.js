
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var attempts = [];
var guessesLeft = 9;
var wins = 0;
var losses = 0;




// Random Number Generator rolls for the letter the game will be checking user rolls against
var index = Math.floor(Math.random() * alphabet.length);
hidden = alphabet[index];


// Updating functions for reset call later

var updateGuessesLeft = function() {
  document.getElementById("left").innerHTML = guessesLeft;
};

var updateHidden = function() {
 var index = Math.floor(Math.random() * alphabet.length);
 hidden = alphabet[index];
};


var updateAttempts = function() {
 document.getElementById("guess").innerHTML = attempts;
};

// Reset for wins and losses later on

var reset = function() {
  guessesLeft = 9;
  attempts = [];

  updateHidden();
  updateGuessesLeft();
  updateAttempts();
};

// Starting the game with letter/key hit

  document.onkeyup = function() {
    guessesLeft = guessesLeft -1;
    var letterHit = event.key;

    attempts.push(letterHit);
    updateGuessesLeft();
    updateAttempts();

   // if loops for wins and losses

     if (guessesLeft > 0){
          if (letterHit == hidden){
              wins = wins +1;
              document.getElementById("wins").innerHTML = wins;
              reset();
          }
        }

    if (guessesLeft == 0){
        losses = losses +1; 
        document.getElementById("losses").innerHTML = losses;
        reset();
      }
 };