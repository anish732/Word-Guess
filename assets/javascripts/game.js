var word = [
  "sholay",
  "lagaan",
  "pyaasa",
  "awara",
  "anand",
  "devdas",
  "chakde",
  "barfi",
  "don"
];
var wins = 0;
var loss = 0;
var guessesLeft = 9;
var computerGuess = "";
var numBlank = 0;
var guessLetter = [];
var wrongGuessSoFar = [];
var rightGuessSoFar = [];
var userGuess = "";

function startGame() {
  guessesLeft = 9;

  //Computer choose random word from word array
  computerGuess = word[Math.floor(Math.random() * word.length)];
  // console.log(computerGuess);

  //Split the word computerGuess
  guessLetter = computerGuess.split("");

  //Number of blank spaces depends on length of the word
  numBlank = guessLetter.length;

  rightGuessSoFar = [];
  wrongGuessSoFar = [];

  for (i = 0; i < numBlank; i++) {
    rightGuessSoFar.push("_");
  }
  console.log(rightGuessSoFar);
  document.getElementById("guess-left").innerHTML = guessesLeft;
  document.getElementById("new-word").innerHTML = rightGuessSoFar.join(" ");
  document.getElementById("wrong-guess").innerHTML = wrongGuessSoFar.join(" ");
}

startGame();
//User choose letter
document.onkeyup = function(event) {
  userGuess = String.fromCharCode(event.which).toLowerCase();
  checkLetters(userGuess);
  roundComplete();
};
//checkLetter() is use to compare letters
function checkLetters(letter) {
  //Booleaan will toggled based on whether or not a user letter is found anywhere in the word
  var letterInWord = false;

  for (var i = 0; i < numBlank; i++) {
    if (computerGuess[i] === letter) {
      //If letter exists then boolean will be true
      letterInWord = true;
    }
  }

  if (letterInWord) {
    for (var j = 0; j < numBlank; j++) {
      if (computerGuess[j] === letter) {
        rightGuessSoFar[j] = letter;
      }
    }
    console.log("Right guess:", rightGuessSoFar);
  } else {
    wrongGuessSoFar.push(letter);
    guessesLeft--;
  }
  console.log("wrong guess: ", wrongGuessSoFar);
}

function roundComplete() {
  document.getElementById("guess-left").innerHTML = guessesLeft;
  document.getElementById("new-word").innerHTML = rightGuessSoFar.join(" ");
  document.getElementById("wrong-guess").innerHTML = wrongGuessSoFar.join(" ");

  if (guessLetter.toString() === rightGuessSoFar.toString()) {
    wins++;

    alert("You win!!!");

    document.getElementById("win").innerHTML = wins;

    startGame();
  } else if (guessesLeft === 0) {
    loss++;
    alert("You lose");

    document.getElementById("loss").innerHTML = loss;

    startGame();
  }
}
