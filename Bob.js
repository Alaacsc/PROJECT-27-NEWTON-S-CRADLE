class Bob {
    constructor(x, y) {
      var options = {
          'isStatic' : false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
      }
      ellipse(x, y, this.width, this.height, options);
      this.width = 50;
      this.height = 50;
      World.add(world, ellipse);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      ellipse(x, y, this.width, this.height);
      pop();
    }
  }