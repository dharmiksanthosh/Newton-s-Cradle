class Ground {
  constructor(x, y, width, height) {
    var options = {
        
        isStatic: true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;

    strokeWeight(10)
    stroke(170);
    fill("grey");
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
  }
}