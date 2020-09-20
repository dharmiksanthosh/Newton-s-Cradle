class Ball{
  constructor(x, y, radius) {

var options = {

  restitution: 1.2,
  desity: 0.2
}

    this.body = Bodies.circle(x, y, radius, options);
    this.radius = width;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;

    noStroke();
    fill("magenta");
    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, this.width);
  }
}