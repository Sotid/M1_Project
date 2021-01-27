"use strict";

let game;
let splashScreen;
let gameScreen;
let gameOverScreen;
let winScreen;

function buildDom(htmlString) {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  let result = div.children[0];
  return result;
}

function createSplashScreen() {
  
  splashScreen = buildDom(`
  <main class="splash">
  <h1>Mr. Miyagi's dream</h1>
   <button class= "startBtn">I am hungry!</button>
  <section class="controls">
   <article>
    <p>Mr. Miyagi loves food. He never stops eating.
     Use the <span> right and left arrow</span> to help him fetch all the food that he likes until he is full and happy.
     But watch out for the brocoli. He hates it!
   </article>
  </main>
 `);

  document.body.appendChild(splashScreen);

  const startButton = splashScreen.querySelector(".startBtn");
  startButton.addEventListener("click", startGame);
  return splashScreen;
}

function removeSplashScreen() {
  splashScreen.remove();
}

function createGameScreen() {
  gameScreen = buildDom(`
  <main id= "game">
   <header>
    <div class= "score">
     <span class="type">Score:</span>
     <span class="value"></span>
    </div>
    <div class="timer">
     <span class="typeTimer">Time:</span>
     <span class="valueTimer"></span>
    </div>
   </header>
    <div class= "canvasContainer">   
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

function createGameOverScreen() {
  gameOverScreen = buildDom(`
   <main class="gameOverScreen">
      <img src= "/Images/Background/—Pngtree—color pixel gameover game over_5525912.png" /img>
      <button class="restartBtnLoose"><span>Play</span> Again</button>
   </main>

  `);

  const restartButton = gameOverScreen.querySelector(".restartBtnLoose");
  restartButton.addEventListener("click", restartGameOverLoose);

  document.body.appendChild(gameOverScreen);
  return gameOverScreen;
}

function gameOverScreenRemove() {
  gameOverScreen.remove();
}

function createWinScreen() {
 // let phrases = ["Hello", "Good boy!", "Happy", "Next", "love"];
  //let random = phrases[Math.floor(phrases.length * Math.random())];

  winScreen = buildDom(`
   <main class= "winScreen" >
      <span class="randomPhrase"></span>
      <img src= "../Images/Background/youWon-removebg-preview.png">
      <button id= "restartWinBtn">Play <span>Again</span></button>
   </main>

  `);

  //let randomize = winScreen.querySelector(".randomPhrase");
  //randomize.innerHTML = random;

  const restartWinButton = winScreen.querySelector("#restartWinBtn");
  restartWinButton.addEventListener("click", restartGameWin);

  document.body.appendChild(winScreen);
  return winScreen;
}

function removeWinScreen() {
  winScreen.remove();
}

function startGame() {
  removeSplashScreen();
  createGameScreen();


  game = new Game()
  game.start();
}

function restartGameOverLoose() {
  if (gameOverScreen) {
    gameOverScreenRemove();
    game = new Game();
    game.gameScreen = createGameScreen();
    game.start();
  }
}

function restartGameWin() {
  if (winScreen) {
    removeWinScreen();
    game = new Game();
    game.gameScreen = createGameScreen();
    game.start();
  }
}

function endGameWin() {
  removeGameScreen();
  createWinScreen();
}

function endGameLoose() {
  removeGameScreen();
  createGameOverScreen();
}

window.addEventListener("load", createSplashScreen);
