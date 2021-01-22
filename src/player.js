"use strict";

class Player {
  constructor(canvas) {
    this.canvas = game.canvas;
    this.ctx = game.ctx;
    this.size = 50;
    this.x = game.canvas.width / 2;
    this.y = game.canvas.height / 2;
    this.direction = 0;
    this.speed = 5;
  }

  setDirection(direction) {
    if ((direction = "up")) {
      this.direction = this.y + 1;
    } else if ((direction = "down")) {
      this.direction = y - 1;
    } else if ((direction = "right")) {
      this.direction = x + 1;
    } else if ((direction = "left")) {
      this.direction = x - 1;
    }
  }

  screenCollisions() {}

  draw() {
    this.ctx.fillStyle = "#993399";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  didCollide() {}
}
