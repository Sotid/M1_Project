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
    this.size = 40;
    this.y = 0 + this.size;
    this.speed = 3;
    this.type = "steak";
    
  }

  draw() {
    this.img = new Image();
    this.img.src = "../Images/Assets/meat.png";
    this.ctx.drawImage(this.img,this.x, this.y, this.size, this.size);
  }
}

class Pizza extends Foods {
  constructor(canvas, x) {
    super(canvas, x);
    this.size = 45;
    this.y = 0 + this.size;
    this.speed = 5;
    this.type = "pizza";
  }

  draw() {
    this.img = new Image();
    this.img.src = "../Images/Assets/pizza.png";
    this.ctx.drawImage(this.img,this.x, this.y, this.size, this.size);
  }
}

class Chips extends Foods {
  constructor(canvas, x) {
    super(canvas, x);
    this.size = 50;
    this.y = 0 + this.size;
    this.speed = 6;
    this.type = "chips";
  }

  draw() {
    this.img = new Image();
    this.img.src = "../Images/Assets/potato-chips.png";
    this.ctx.drawImage(this.img,this.x, this.y, this.size, this.size);
  }
}

class Brocoli extends Foods {
  constructor(canvas, x) {
    super(canvas, x);
    this.size = 35;
    this.y = 0 + this.size;
    this.speed = 9;
    this.type = "brocoli";
  }

  draw() {
    this.img = new Image();
    this.img.src = "../Images/Assets/brocoli.png";
    this.ctx.drawImage(this.img,this.x, this.y, this.size, this.size);
  }
}


