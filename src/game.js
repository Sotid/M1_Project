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
    this.scoreElement = undefined;
  }

  start() {
    this.canvasContainer = gameScreen.querySelector(".canvasContainer");
    this.canvas = this.gameScreen.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.containerWidth = this.canvasContainer.clientWidth;
    this.containerHeight = this.canvasContainer.clientHeight;
    this.canvas.setAttribute("width", this.containerWidth);
    this.canvas.setAttribute("height", this.containerHeight);

    this.scoreElement = this.gameScreen.querySelector(".score .value");

    this.player = new Player(this.canvas);
    this.player.draw();

    function handleKeyDown(event) {
      if (event.key === `ArrowRight`) {
        this.player.setDirection("right");
      } else if (event.key === `ArrowLeft`) {
        this.player.setDirection("left");
      }
    }

    const boundHandleKeyDown = handleKeyDown.bind(this);

    document.body.addEventListener("keydown", boundHandleKeyDown);

    this.startLoop();
  }

  startLoop() {
    const loop = function () {
      // Foods
      if (Math.random() > 0.96) {
        let randomSteak = this.canvas.width * Math.random();
        let newSteak = new Steak(this.canvas, randomSteak);
        this.foods.push(newSteak);
      }

      if (Math.random() > 0.99) {
        let randomPizza = this.canvas.width * Math.random();
        let newPizza = new Pizza(this.canvas, randomPizza);
        this.foods.push(newPizza);
      }

      if (Math.random() > 0.98) {
        let randomChips = this.canvas.width * Math.random();
        let newChips = new Chips(this.canvas, randomChips);
        this.foods.push(newChips);
      }

      if (Math.random() > 0.97) {
        let randomBrocoli = this.canvas.width * Math.random();
        let newBrocoli = new Brocoli(this.canvas, randomBrocoli);
        this.foods.push(newBrocoli);
      }

      this.foods = this.foods.filter(function (food) {
        food.updatePosition();

        return food.isInsideScreen;
      });

      //Player
      this.player.setDirection();

      this.player.screenCollisions();

      //Draw

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.player.draw();

      this.foods.forEach(function (food) {
        food.draw();
      });

      // Stop Game
      if (!this.gameIsOver || !this.gameIsWon) {
        window.requestAnimationFrame(loop);
      }
    }.bind(this);

    // Start loop
    loop();
  }

  /////ADD IT IN THE START LOOP AFTER THE MATH:RANDOM
  //foodGrabbed() {
  // //   this.foods.forEach(function(food){
  // //     if(this.player.didCollide(food)){
  // //       food.y = 0 -food.size;
  // //     }
  //  };

  gameOverLoose() {}

  gameOverWin() {}

  updateScore() {}
}
