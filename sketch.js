
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinImage
function preload()
{
	dustbinImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground1=new Ground(400,620,500,5)
paper1=new Paper(200,600,30,30)
dustbin1=new Dustbin(500,600,10,40)
dustmiddle=new Dustbin(545,615,80,10)
dustbin2=new Dustbin(580,600,10,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground1.display()
 
  dustbin1.display()
  dustmiddle.display()
  dustbin2.display()
  imageMode(CENTER)
  image(dustbinImage,540,580,100,80)
  paper1.display()
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x: 100,y:-95})
}

}

