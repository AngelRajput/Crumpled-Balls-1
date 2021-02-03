const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3;
var ground;
var paper;

function preload() {
	
}

function setup() {
	createCanvas(900,600);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper (100,300,20);
	ground = new Ground (700,550,1400,10);
	dustbin1 = new Dustbin (610,490,20,80);
	dustbin2 = new Dustbin (698,535,200,20)
	dustbin3 = new Dustbin (785,490,20,80);

	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  
  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-84})

	}

}



