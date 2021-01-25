class Foods {
  constructor(canvas, x) {
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
  constructor(canvas, x) {
    super(canvas, x);
    this.size = 10;
    this.y = 0 + this.size;
    this.speed = 3;
    this.type = "steak";
    
  }

  draw() {
    this.ctx.fillStyle= "black"
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

class Pizza extends Foods {
  constructor(canvas, x) {
    super(canvas, x);
    this.size = 25;
    this.y = 0 + this.size;
    this.speed = 5;
    this.type = "pizza";
  }

  draw() {
    this.ctx.fillStyle = "#FF00FF";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

class Chips extends Foods {
  constructor(canvas, x) {
    super(canvas, x);
    this.size = 15;
    this.y = 0 + this.size;
    this.speed = 6;
    this.type = "chips";
  }

  draw() {
    this.ctx.fillStyle = "#FFD700";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

class Brocoli extends Foods {
  constructor(canvas, x) {
    super(canvas, x);
    this.size = 20;
    this.y = 0 + this.size;
    this.speed = 9;
    this.type = "brocoli";
  }

  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}


