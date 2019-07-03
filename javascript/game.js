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

let wins = 0;
let guesses = 15;
let guessedLetters = [];
let answerArray = [];
let guessesLeft = 15;
let rightWord = [];
let wrongWord = [];

let currentWord = document.getElementById("currentWord");
// let  = document.getElementById("computer");
// let tie = document.getElementById("tie");

// 1. Pick a random word out of the array,
// display the random player with function split() and underscores in place.
let updateCurrentPlayer = function() {
  var output = players[Math.floor(Math.random() * players.length)];
  var hangmanPlayer = output.split("");
  return hangmanPlayer;
  // display the random player split up with underscores and join it into a word
};

// update the word with underscores

let updateCurrentWord = function() {
  for (var i = 0; i < updateCurrentPlayer().length; i++) {
    answerArray[i] = "_";
    document.querySelector("#currentWord").innerHTML = answerArray.join(" ");
  }
};

updateCurrentWord();

console.log(answerArray);

//reset the game when the users wants to, or at the end of the game

let reset = function() {
  let guessesLeft = 15;
  let guessedLetters = [];
  updateCurrentPlayer();
};
// Determines which key was pressed.

// document.addEventListener("keypress", function() {

//   document.querySelector("#currentWord").innerHTML =
// });

document.addEventListener("keypress", event => {
  let keycode = event.keyCode;
  let keyword = String.fromCharCode(keycode);
  console.log(keyword);

  //update the underscores

  if (updateCurrentPlayer().indexOf(keyword) > -1) {
    rightWord.push(keyword);

    console.log(rightWord);
    // answerArray[updateCurrentWord.indexOf(keyword)] = keyword;
    // currentWord.innerHTML = answerArray.join("");
    // document.querySelector("#currentWord").innerHTML = answerArray.join(" ");
  } else {
    wrongWord.push(keyword);
    console.log(wrongWord);
  }
});
