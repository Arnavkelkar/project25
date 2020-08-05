
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var b1,b2,b3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	b1=createSprite(600,640,200,20);
	b2=createSprite(700,580,20,100);
	b3=createSprite(500,580,20,100);

	ground=createSprite(width/2,650,1000,20)

	engine = Engine.create();
	world = engine.world;

	b1=Bodies.rectangle(600,640,200,20,{isStatic:true});
	World.add(world, b1);
	b2=Bodies.rectangle(500,580,20,100,{isStatic:true});
	World.add(world, b2);
	b3=Bodies.rectangle(300,580,20,100,{isStatic:true});
	World.add(world, b3);

	ground=Bodies.rectangle(width/2,650,800,20,{isStatic:true});
	World.add(world, ground);

	Engine.run(engine);

	paper = new Paper(100,550)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paper.display();
  rect(400,650,800,20)
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



