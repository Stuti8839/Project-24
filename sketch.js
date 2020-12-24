var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 200);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	rectangle1 = new dustbin(700,180,100,10);

	rectangle2 = new dustbin(650,160,10,50);

	rectangle3 = new dustbin(750,160,10,50);
	
	packageBody = Bodies.circle(width/2 , 200 , 25 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	ground = new Ground(width/2, 200, width, 20);
	 
	Paper = new paper(10,100,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER); 
  Engine.update(engine);
  background(0);
  Paper.display();
  rectangle1.display();
  rectangle2.display();
  rectangle3.display();
  ground.display();
  drawSprites();

  keyPressed();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(Paper.body, Paper.body.position, {x: 0, y: -4});
	}
	if (keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(Paper.body, Paper.body.position, {x: 4, y: 0});
	}
}


