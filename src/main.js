"use strict";

let game;
let splashScreen;
let gameScreen;
let gameOverScreen;
let winScreen;


function buildDom(htmlString) {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  let result= div.children[0];
  return result
}

function createSplashScreen() {
   splashScreen = buildDom(`
  <main class="splash">
  <h1>Mr. Miyagi's feast</h1>
   <button class= "startBtn">I am hungry!</button>
  <section class="controls">
   <article>
    <p>Mr. Miyagi loves food. He never stops eating.
     Help him fetch all the food that he likes until he is full and happy.
     But watch out for the brocoli. He hates it!
   </article>
  </main>
 `);

  document.body.appendChild(splashScreen);

  const startButton = splashScreen.querySelector(".startBtn");
  startButton.addEventListener("click", startGame);
 return splashScreen
}


function removeSplashScreen() {
  splashScreen.remove();
};


function createGameScreen() {
  gameScreen = buildDom(`
  <main class= "game">
   <header>
    <div class= "score">
     <span class="type">Score:</span>
     <span class="value"></span>
    </div>
   </header>

   <div class="canvasContainer">
    <canvas></canvas>
   </div>
  </main>
 `);

  document.body.appendChild(gameScreen);
  return gameScreen;
}

function removeGameScreen() {
  gameScreen.remove();
}

// function createGameOverScreen() {
//   gameOverScreen = buildDom(`
//    <main>
//       <img src"" />
//       <p>I hate brocoli!</p>
//       <button class="restartBtn">Play Again</button>
//    </main>

//   `);

//   const restartButton = gameOverScreen.querySelector(".restartBtn");
//   restartButton.addEventListener("click", startGame);

//   document.body.appendChild(gameOverScreen);
// }

// function gameOverScreenRemove() {
//   gameOverScreen.remove();
// }

// function createWinScreen() {
//   let phrases = ["Hello", "Good boy!", "Happy","Next","love"];
//   let random = phrases[Math.floor(phrases.length * Math.random())];

//   winScreen = buildDom(`
//    <main>
//       <img src"" />
//       <span class="randomPhrase"></span>
//       <button id= "restartWinBtn">Play Again</button>
//    </main>

//   `);

//    let randomize= winScreen.querySelector(".randomPhrase");
//    randomize.innerHTML=random;

//   const restartWinButton = winScreen.querySelector("#restartWinBtn");
//   restartWinButton.addEventListener("click", startGame);

//   document.body.appendChild(winScreen);
// }

// function removeWinScreen() {
//   winScreen.remove();
// }

function startGame() {
  removeSplashScreen();
 // removeGameOverScreen();
  //removeWinScreen();
  createGameScreen();

  game= new Game();
  game.gameScreen = createGameScreen();
  game.start();
}

function endGame() {
  removeGameScreen();
 // createGameOverScreen();
  //createWinScreen();
}

window.addEventListener("load", createSplashScreen);