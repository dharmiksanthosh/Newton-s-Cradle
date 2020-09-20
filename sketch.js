
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rod;
var ball1,ball2,ball3,ball4,ball5;
var chain1,chain2,chain3,chain4,chain5;

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	rod = new Ground(width/2,50,width-100,40);

	ball1 = new Ball(200,400,50);
	ball2 = new Ball(300,400,50);
	ball3 = new Ball(400,400,50);
	ball4 = new Ball(500,400,50);
	ball5 = new Ball(600,400,50);

	chain1 = new Chain(ball1.body,{x:200,y:50});
	chain2 = new Chain(ball2.body,{x:300,y:50});
	chain3 = new Chain(ball3.body,{x:400,y:50});
	chain4 = new Chain(ball4.body,{x:500,y:50});
	chain5 = new Chain(ball5.body,{x:600,y:50});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rod.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

if (keyDown("up")){

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-0.1,y:-0.1});
  }
}