
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane = new Roof(600,100,1200,20);
	bobObject1 = new Bob(610,500,300, PI/2);
	bobObject2 = new Bob(660,500,300, PI/2);
	bobObject3 = new Bob(710,500,300, PI/2);
	bobObject4 = new Bob(760,500,300, PI/2);
	bobObject5 = new Bob(810,500,300, PI/2);
	rope1 = new Rope(bobObject1.body,plane.body,-bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  ellipseMode(CENTER);
  background(0);

  
  plane.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  
  drawSprites();
 
}
