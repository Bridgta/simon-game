// Initialization variables
let gameOn, counter, maxCount, playerTurn, simonPatterns, userPatterns;
let colours = [
  { colour: "red", sound: "someURL" },
  { colour: "yellow", sound: "YELLOW SOUND" },
  { colour: "blue", sound: "blue sound" },
  { colour: "green", sound: "green sound" }
];

// UI VARIABLES
const startButton = $(".start");
const greenPad = $("#greenPad");
const redPad = $("#redPad");
const bluePad = $("#bluePad");
const yellowPad = $("#yellowPad");

function initializeGame() {
  counter = 0; //score
  maxCount = 15;
  playerTurn = false;
  simonPatterns = [];
  userPatterns = [];

  generatePattern();
}

function startGame() {
  gameOn = true;
  initializeGame();
  playSimonsPatterns();

  console.log("startGame");
}

function gameOver() {
  gameOn = false;
  initializeGame();
}

function generatePattern() {
  const randomColour = colours[Math.floor(Math.random() * colours.length)];
  if (!playerTurn) {
    simonPatterns.push(randomColour);
  }
}

function playSimonsPatterns() {
  // only play pattern when the game has started/initialized
  if (simonPatterns.length > 0) {
    simonPatterns.forEach(function(pattern) {
      if (pattern.colour === "red") {
        redLight(pattern);
      } else if (pattern.colour === "yellow") {
        yellowLight(pattern);
      } else if (pattern.colour === "blue") {
        blueLight(pattern);
      } else {
        // Catch all, should be green
        greenLight(pattern);
      }
    });
  }
}

// Pad Effect Functions

function toggleLight(pad, cssClass) {
  pad.toggleClass(cssClass);
  return setTimeout(() => {
    pad.toggleClass(cssClass);
  }, 500);
}

function greenLight(pattern) {
  console.log(pattern.colour);
  toggleLight(greenPad, "grLit");
}
function yellowLight(pattern) {
  console.log(pattern.colour);
  toggleLight(yellowPad, "yeLit");
}
function blueLight(pattern) {
  console.log(pattern.colour);
  toggleLight(bluePad, "blLit");
}
function redLight(pattern) {
  console.log(pattern.colour);
  toggleLight(redPad, "redLit");
}

// User Click Logic

function checkAnswer(event) {}

greenPad.on("click", event => checkAnswer(event));
redPad.on("click", event => checkAnswer(event));
bluePad.on("click", event => checkAnswer(event));
yellowPad.on("click", event => checkAnswer(event));

// First initial load
startButton.on("click", startGame);
