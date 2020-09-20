class Chain{
    constructor(bodyA,pointB){

        var options = {

            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            lenght: 200
        }
        this.pointB = pointB;
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){

    if (this.chain.bodyA){

        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(5);
        stroke(255);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
      }
    }
} 
