class Foods {
  constructor(canvas, x, ctx) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.x = x;
  }

  updatePosition() {
    this.y = this.y + this.speed;
  }

  isInsideScreen() {
    const bottom = this.y + this.size;
    const isInside = bottom > 0;

    return isInside;
  }
}

class Steak extends Foods {
  constructor(canvas, x, ctx) {
    super(canvas, x, ctx);
    this.size = 10;
    this.y = 0 + this.size;
    this.speed = 3;
    this.type = "good";
    this.score = 10;
  }

  draw() {
    this.ctx.fillstyle = "#DC143C";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

class Pizza extends Foods {
  constructor(canvas, x, ctx) {
    super(canvas, x, ctx);

    this.size = 25;
    this.y = 0 + this.size;
    this.speed = 5;
    this.type = "good";
    this.score = 15;
  }

  draw() {
    this.ctx.fillstyle = "#FF00FF";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

class Chips extends Foods {
  constructor(canvas, x, ctx) {
    super(canvas, x, ctx);
    this.size = 15;
    this.y = 0 + this.size;
    this.speed = 6;
    this.type = "good";
    this.score = 20;
  }

  draw() {
    this.ctx.fillstyle = "#FFD700";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

class Brocoli extends Foods {
  constructor(canvas, x, ctx) {
    super(canvas, x, ctx);
    this.size = 20;
    this.y = 0 + this.size;
    this.speed = 9;
    this.type = "bad";
    this.score = -10;
  }

  draw() {
    this.ctx.fillstyle = "#5F9EA0";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}
