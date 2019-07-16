// define the variables in the array - 15 players
const players = [
  "leonard",
  "lowry",
  "lin",
  "vanvleet",
  "gasol",
  "siakam",
  "ibaka",
  "green",
  "anundby",
  "mccaw",
  "powell",
  "meeks",
  "moreland",
  "loyd",
  "miller"
];

var winscore = 0;
var remainingGuesses = 15;
var guessedLetters = [];
var answerArray = [];

var currentWord = document.getElementById("currentWord");
var wins = document.getElementById("wins");
var alreadyGuessed = document.getElementById("alreadyGuessed");
var guesses = document.getElementById("guesses");

// 1. pick a random word

function randomPlayer() {
  var randomPlayer = players[Math.floor(Math.random() * players.length)];
  return randomPlayer;
}

var word;
var remainingLetters;

function startGame() {
  answerArray = [];
  word = randomPlayer();
  remainingLetters = word.length;
  // print the underscores to the page
  currentWord.innerHTML = playerSetupUnderScores(word);
}

// set up the underscores under the letters and show the user what they have to work with
function playerSetupUnderScores(word) {
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  var underScores = answerArray.join(" ");

  return underScores;
}
// 2. when a user clicks the letter --- make sure to set it to all lowercase
// initalize event listener

function updateGameState(word, letterGuessed, wordDisplayed) {
  var answerWord = word.split("");
  var letterFound = false;

  // Loop through array of characters of word
  for (var i = 0; i < answerWord.length; i++) {
    if (letterGuessed != answerWord[i]) {
    }
    if (letterGuessed == answerWord[i]) {
      letterFound = true;

      wordDisplayed[i] = letterGuessed;
      currentWord.innerHTML = wordDisplayed.join(" ");
      remainingLetters--;
    }
  }

  if (!letterFound) {
    guessedLetters.push(letterGuessed);
    remainingGuesses--;
    alreadyGuessed.innerHTML = remainingGuesses;
    guesses.innerHTML = guessedLetters;
    console.log(guessedLetters);
  }
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed.

  var guess = event.key.toLowerCase();

  updateGameState(word, guess, answerArray);

  if (remainingLetters == 0) {
    winscore++;
    wins.innerHTML = winscore;
    startGame();
  }

  if (remainingGuesses === 0) {
    //GAME OVER
    alert("Game Over! Refresh the page to restart the game! ");
  }

  if (winscore == 15) {
    alert("You Win!!! Congratulations!! Refresh to play again.");
  }
};

startGame();
