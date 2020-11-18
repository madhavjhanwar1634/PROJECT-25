
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground1=new Ground(400,650,500,5)
paper1=new Paper(200,620,30)
dustbin=new Dustbin(600,600,100,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground1.display()
  dustbin.display()
  paper1.display()
  //dustmiddle.display()
  //dustbin2.display()
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x: 140,y:-95})

}
}

