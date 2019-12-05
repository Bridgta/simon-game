// Initialization variables
let gameOn, counter, maxCount, playerTurn, simonPatterns, userPatterns;
// rightAnswer;

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
  //colours.forEach(toggleClass);

  console.log("startGame");
}

function gameOver() {
  gameOn = false;
  initializeGame();
  //add game over audio
  //display == X
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

function generateUserPattern(event) {
  // take the input from the user click and add it to the user patterns array so we can check it against simon's
  const userChoice = event.target.getAttribute("value");
  userPatterns.push(userChoice);
  checkAnswer();

  console.log(userChoice);
}

function checkAnswer() {
  // checks the colour chosen in the user pattern against the simon pattern at a given index
  let rightAnswer = true;
  userPatterns.forEach(function(colour, index) {
    // console.log(colours);
    if (userPatterns[index] === simonPatterns[index].colour) {
      console.log("SAME");
    } else {
      rightAnswer = false;
      console.log("game over");
    }
  });
  keepPlaying(rightAnswer);
}

function keepPlaying(wasRight) {
  playerTurn != playerTurn;
  if (wasRight === true) {
    return setTimeout(() => {
      generatePattern();
      playSimonsPatterns();
    }, 1000);
  } else {
    gameOver();
  }
}

// First initial load
startButton.on("click", startGame);

// Game Event Handlers

greenPad.on("click", event => generateUserPattern(event));
redPad.on("click", event => generateUserPattern(event));
bluePad.on("click", event => generateUserPattern(event));
yellowPad.on("click", event => generateUserPattern(event));

// function checkAnswer(simonPatterns, userPatterns) {
//   let pattern = simonPatterns.length;
//   if (pattern != userPatterns.length) {
//     console.log("game over");
//   }
//   for (let i = 0; i < pattern; i++) {
//     if (simonPatterns[i] !== userPatterns[i]) {
//       console.log("game over");
//     }
//   }
//   return true;
// }
// console.log(checkAnswer("redPad"));

// function checkAnswer(event) {
//   if (greenPad.on("click", event) === simonPatterns.length) {
//     generatePattern + 1;
//     userPatterns + 1;
//   } else if (redPad.on("click", event) === simonPatterns.length) {
//     generatePattern + 1;
//     userPatterns + 1;
//   } else if (bluePad.on("click", event) === simonPatterns.length) {
//     generatePattern + 1;
//     userPatterns + 1;
//   } else if (yellowPad.on("click", event) === simonPatterns.length) {
//     generatePattern + 1;
//     userPatterns + 1;
//   } else {
//     console.log("game over");
//     gameOver();
//   }
// }

// function checkAnswer(event){
// 	userPatterns.pad === simonPatterns
// }

//   if (userPatterns.length === simonPatterns.length) {
//     counter + 1;
//     // wait for
//     generatePattern + 1;
//   } else {
//     gameOver();
//   }

//if player turn === true
//user clicks init user pattern array
//this can call any of the pads
//if correct simon pattern conts + 1
//if correct display +1
// if false game over function is called

// "pad".on("click" === simonPatterns);

//if(game.counter === 15){
//winning audio	func();
