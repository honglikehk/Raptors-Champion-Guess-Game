// define the variables in the array
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
var guessesLeft = 15;
var rightWord = [];
var wrongWord = [];
var hangmanPlayer = [];

var currentWord = document.getElementById("currentWord");
var wordLength = 0;
// let  = document.getElementById("computer");
// let tie = document.getElementById("tie");

// 1. Pick a random word out of the array,
// display the random player with function split() and underscores in place.
var updateCurrentPlayer = function() {
  var output = players[Math.floor(Math.random() * players.length)];
  wordLength = output.length;
  hangmanPlayer = output.split("");
  console.log(output);
  console.log(hangmanPlayer);
  return hangmanPlayer;
  // display the random player split up with underscores and join it into a word
};

// update the word with underscores

var updateCurrentWord = function() {
  updateCurrentPlayer();
  for (var i = 0; i < wordLength; i++) {
    answerArray[i] = "_";
    document.querySelector("#currentWord").innerHTML = answerArray.join(" ");
  }
};

updateCurrentWord();

//reset the game when the users wants to, or at the end of the game

var reset = function() {
  let guessesLeft = 15;
  let guessedLetters = [];
  updateCurrentPlayer();
};
// Determines which key was pressed.

// document.addEventListener("keypress", function() {

//   document.querySelector("#currentWord").innerHTML =
// });

document.onkeyup = function(event) {
  var userGuess = event.key;

  // takes in guess, returns nothing
  // if (userGuess === hangmanPlayer[i]) {

  // }
  // correct = pushed to answer array
  // wrong = pushed to side array
};

// document.addEventListener("keypress", event => {
//   let keycode = event.keyCode;
//   let keyword = String.fromCharCode(keycode);
//   console.log(keyword);

//   //update the underscores

//   if (updateCurrentPlayer().indexOf(keyword) > -1) {
//     rightWord.push(keyword);

//     console.log(rightWord);
//     // answerArray[updateCurrentWord.indexOf(keyword)] = keyword;
//     // currentWord.innerHTML = answerArray.join("");
//     document.getElementById("currentWord").innerHTML = answerArray.join(" ");
//   } else {
//     wrongWord.push(keyword);
//     console.log(wrongWord);
//   }
// });
