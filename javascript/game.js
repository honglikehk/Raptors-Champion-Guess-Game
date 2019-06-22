// Array of players
var players = [
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

var playersLength = players.length;
//message
var msg = "";
// Counter
var i;
// Creating variables to hold wins and number of guesses
var wins = 0;
var guesses = 20;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directionsText");
var winsText = document.getElementById("winsText");
var currentWord = document.getElementById("currentWord");
var guessLeft = document.getElementById("guessLeft");
var lettersGuessed = document.getElementById("LettersGuessed");

function guessgame() {
  // Determines which key was pressed.

  var j;
  // pick a random word from the array
  var player = players[Math.floor(Math.random() * players.length)];
  console.log(player);

  // create an empty array and fill it with underscores to match the same amount of letters in each word

  var answerArray = [];
  let randomWord = [];
  for (var i = 0; i < player.length; i++) {
    answerArray[i] = "_";
  }
  currentWord.innerHTML = answerArray.join(" ");
  var guesses = 10;
  document.onkeyup = function(event) {
    if (guesses != 0) {
      // var remainingLetters = player.length;

      // shows the game ---- which are the underscores

      randomWord = player.split("");
      // console.log(randomWord);
      // console.log(randomWord[0].toUpperCase());
      // console.log(randomWord[0]);

      for (j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === event.key) {
          answerArray[j] = event.key;
          currentWord.innerHTML = answerArray.join(" ");
          break;
        }
      }
      if (answerArray[j] != event.key) {
        console.log("Inside the ");
        guesses--;
      }
      guessLeft.innerHTML = "Number of remaining guesses are : " + guesses;
      // console.log(j);
      // console.log(event.key);
      // guessLeft.innerHTML = "Number of remaining guesses are : " + guesses;
    } else {
      alert("Sorry nomore guesses left !!!!");
    }
  };
  guessLeft.innerHTML = "Number of remaining guesses are : " + guesses;
}
