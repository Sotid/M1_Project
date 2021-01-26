"use strict";

class Player {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.size = 100;
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.direction = 0;
    this.speed = 4;
  }

  setDirection(direction) {
    if (direction === "right") {
      this.direction = 1;
    } else if (direction === "left") {
      this.direction = -1;
    }
  }

  screenCollisions() {
    this.x = this.x + this.direction * this.speed;
    let screenLeft = 0;
    let screenRight = this.canvas.width;

    if (this.x <= screenLeft) {
      this.setDirection("right");
    } else if (this.x + this.size >= screenRight) {
      this.setDirection("left");
    }
  }

  draw() {
    this.img = new Image();
    this.img.src = "Images/Assets/samson-sprite-removebg-preview.png";

    this.playerRight =
      "Images/Assets/samson-sprite_right-removebg-preview.png";
    this.playerLeft = "Images/Assets/samson-sprite-removebg-preview.png";

    if (this.direction === 1) {
      this.img.src = this.playerRight;
    } else if (this.direction === -1) {
      this.img.src = this.playerLeft;
    }

    this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
  }

  didCollide(food) {
    const playerLeft = this.x;
    const playerRight = this.x + this.size;
    const playerTop = this.y;
    const playerBottom = this.y + this.size;

    const foodLeft = food.x;
    const foodRight = food.x + food.size;
    const foodTop = food.y;
    const foodBottom = food.y + food.size;

    const collideBottom = foodTop <= playerBottom && foodTop >= playerTop;
    const collideLeft = foodLeft <= playerRight && foodLeft >= playerLeft;
    const collideRight = foodRight >= playerLeft && foodRight <= playerRight;
    const collideTop = foodBottom >= playerTop && foodBottom <= playerBottom;

    if ((collideBottom || collideTop) && (collideRight || collideLeft)) {
      return true;
    } else {
      return false;
    }
  }
}
