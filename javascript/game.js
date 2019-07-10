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

var wins = 0;
var guesses = 15;
var guessedLetters = [];
var answerArray = [];

var currentWord = document.getElementById("currentWord");
var wins = document.getElementById("wins");
var alreadyGuessed = document.getElementById("alreadyGuessed");

// 1. pick a random word

function randomPlayer() {
  var randomPlayer = players[Math.floor(Math.random() * players.length)];
  return randomPlayer;
}

var word = randomPlayer();

// the next word in the game
var nextWord = randomPlayer();
console.log(nextWord);

console.log(word);

var remainingLetters = word.length;

console.log(remainingLetters);

// 1.5 set up the underscores under the letters and show the user what they have to work with
function playerSetupUnderScores(word) {
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  var underScores = answerArray.join(" ");

  return underScores;
}

// print the underscores to the page
currentWord.innerHTML = playerSetupUnderScores(word);

console.log(playerSetupUnderScores(word));

// 2. when a user clicks the letter --- make sure to set it to all lowercase
// initalize event listener

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed.

  function getGuess() {
    var userGuess = event.key;
    var user = userGuess.toLowerCase();
    return user;
  }

  var guess = getGuess();

  console.log(getGuess());

  function updateGameState(word, guess, answerArray) {
    var comparePlayer = word.split("");
    var indPlayer = comparePlayer.indexOf(guess);

    console.log(indPlayer);
    console.log(answerArray);

    for (var j = 0; j < word.length; j++) {
      if (indPlayer === -1) {
        guessedLetters.push(guess);
        alreadyGuessed.innerHTML = guesses;
        guesses--;
      } else {
        if (word[j] === guess) {
          answerArray[j] = guess;
          currentWord.innerHTML = answerArray;
          remainingLetters--;
        }
      }

      //3. if the letter clicked is correct then go fill all the underscores with the correct answer and show the progress to the user
    }
  }

  updateGameState(word, guess, answerArray);
  console.log(updateGameState(word, guess, answerArray));
  //4. if it is not correct then log it to an empty array and show it

  //5.  when the word is answered correctly --- add 1 point to the wins
  // when the wins --- went through the length of the array - the user wins the game
  // when they just win one word - reset .. the word and give a new random word

  // 6. when the remaining guesses = 0; game over for the user
};

// things still need to be done
/*
1. log the number of wins - when all the array items - have been played with - then the player wins

2. deduct from the number of guesses and log it in the guess panel 

3. ***** SWITCH word when completed to the next item in the array 

4. if the user # of guesses reaches 0, then its game over for the user. 

*/
