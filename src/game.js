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
    this.score = 0;
    this.timer = 0;
    this.timerSeconds = 0;
    this.scoreElement = undefined;
    this.timerElement = undefined;
    this.gameIsWonSound = new Audio("Images/Sounds/GameOverWin.wav");
    this.gameIsLostSound = new Audio("Images/Sounds/GameOverLoose.wav");
    
  }

  start() {
    this.canvasContainer = document.querySelector(".canvasContainer");
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.containerWidth = this.canvasContainer.clientWidth;
    this.containerHeight = this.canvasContainer.clientHeight;
    this.canvas.setAttribute("width", this.containerWidth);
    this.canvas.setAttribute("height", this.containerHeight);

    this.scoreElement = document.querySelector(".score .value");

    this.timerElement = document.querySelector(".timer .valueTimer");
    this.timer= this.timerElement
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
      
      this.updateScore();
      //this.printTime()

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

      // Colissions
      this.checkFood();

      this.player.screenCollisions();

      // Moving food
      this.foods = this.foods.filter((food) => {
        food.updatePosition();

        return food.isInsideScreen;
      });

      //Player
      this.player.setDirection();

      //Draw

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.player.draw();

      this.foods.forEach(function (food) {
        food.draw();
      });

      // Stop Game if won
      if (!this.gameIsWon && !this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }
    }.bind(this);

    // Start loop
    window.requestAnimationFrame(loop);
  }

  checkFood(food) {
    this.foods.forEach(function (food) {
      if (this.player.didCollide(food)) {
        food.y = 0 - food.size;

        if (food.type === "steak") {
          this.score += 1;
        } else if (food.type === "pizza") {
          this.score += 2;
        } else if (food.type === "chips") {
          this.score += 4;
        } else if (food.type === "brocoli") {
          this.score -= 4;
          food.brocoliSound.play();
        }

        if (this.score > 100) {
          this.gameOverWin();
          this.gameIsWon = true;
          this.gameIsWonSound.play();
        }

        if (this.score < 0) {
          this.gameIsOver = true;
          this.gameOverLoose();
          this.gameIsLostSound.play();
        }
      }
    }, this);
  }

  gameOverLoose() {
    this.gameIsOver = true;
    endGameLoose();
  }

  gameOverWin() {
    this.gameIsWon = true;
    endGameWin();
  }

  updateScore() {
    this.scoreElement.textContent = this.score;
  }

//   printTime() {
//     //setInterval( this.timer -= 1,1000)
//     let timeLeft = 30;
//     this.timerElement = document.querySelector(".timer .valueTimer");
    
    
    
//     function countdown() {
//       if (timeLeft == -1) {
//         clearTimeout(timerId);
     
//       } else {
//         this.timerElement.innerHTML = timeLeft;
//         timeLeft--;
//       }
//       let bound= countdown.bind(this.timerElement) 
// this.timerElement= setInterval(bound(), 1000);

//     }
   


//   }

}