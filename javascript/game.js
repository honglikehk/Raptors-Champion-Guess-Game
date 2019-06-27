// define the variables in the array
let players = [
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
// array to record the users guesses
let alreadyGuessed = [];

// 1. Pick a random word out of the array
let player = players[Math.floor(Math.random() * players.length)];

// display the random player with function split() and underscores in place.
let hangmanPlayer = player.split("");
console.log(hangmanPlayer);

let answerArray = [];
// display the random player split up with underscores and join it into a word
for (var i = 0; i < player.length; i++) {
  answerArray[i] = "_";
}
let currentWord = document.getElementById("currentWord");
// currentWord.innerHTML = answerArray;
currentWord.innerHTML = answerArray.join(" ");

// Determines which key was pressed.
document.onkeyup = function(event) {
  let userGuess = event.key;

  // let the remaining letters be how much letters are in the word
  let remainingLetters = player.length;

  // if the user inputs equals to a letter in the game, then update the progress and decrease the remaining letters by 1

  for (let j = 0; j < hangmanPlayer.length; j++) {
    if (userGuess === hangmanPlayer[j]) {
      remainingLetters--;
    }
  }
};
