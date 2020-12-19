
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground
var box,box1,box2,box3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.z
	ground=new Ground(400,650,800,20)

	ball=new Paper(15)


	box1=new Box(600,572,10,125)
	box2=new Box(649.5,634.5,110,10)
	box3=new Box(700,572,10,125)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display()

  box1.display()
  box2.display()
  box3.display()
  ball.display()

  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:32,y:-40})
		
	}
}




