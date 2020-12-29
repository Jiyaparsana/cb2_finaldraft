
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var edge1,edge2,edge3;
var dustbin1, dustbin
var ground;

function preload()
{
    dustbin=loadImage("dustbin.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(150,645,70)
    edge1 = new Edges(455,560,20,180)
	edge2 = new Edges(550,640,180,20)
	edge3 = new Edges(645,560,20,180)
	ground = Bodies.rectangle(400,650,800,10,{isStatic:true})
	

    World.add(world,ground)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  push()
  fill("pink")
  rect(400,650,800,10)
  pop()

  paper1.display()
  imageMode(CENTER);
 image(dustbin,550,540,200,180);
 
  push()
  strokeWeight(0)
  fill("white")
 edge1.display()
 edge2.display()
 edge3.display()
 pop()
 
}
 

function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}
















