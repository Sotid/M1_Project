"use strict";

class Game {
  constructor() {
    this.canvas = undefined;
    this.ctx = undefined;
    this.foods = [];
    this.player = undefined;
    this.gameIsOver = false;
    this.gameIsWon = false;
    this.gameScreen = undefined;
    this.score = 1;
    this.scoreElement= undefined;
   
  
  }


  start(){
   this.canvasContainer = gameScreen.querySelector(".canvasContainer");
   this.canvas= this.gameScreen.querySelector("canvas");
   this.ctx= this.canvas.getContext("2d");
   this.containerWidth = this.canvasContainer.clientWidth;
   this.containerHeight = this.canvasContainer.clientHeight;
   this.canvas.setAttribute('width', this.containerWidth);
   this.canvas.setAttribute('height', this.containerHeight);

   this.scoreElement = this.gameScreen.querySelector(".score .value");
   
   this.player = new Player(this.canvas);
   this.player.draw()
   
   function handleKeyDown(event) {
    if (event.key === "ArrowUp") {
      this.player.setDirection("up");
    } else if (event.key === "ArrowDown") {
      this.player.setDirection("down");
    } else if (event.key === "ArrowRight") {
        this.player.setDirection("right");
    } else if (event.key === "ArrowLeft") {
      this.player.setDirection("left");
    }
   }

  const boundHandleKeyDown = handleKeyDown.bind(this);
  document.body.addEventListener("keydown", boundHandleKeyDown);

   this.startLoop();
  }

  startLoop(){

  }

  foodGrabbed(){

  }

  screenCollisions(){

  }

  gameOverLoose(){

  }

  gameOverWin(){

  }

  updateScore(){

  }
}


