const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
var dusbin;
var paper;



function setup() {
	createCanvas(1350,700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(width/2,670,width,20);
	dusbin=new Dusbin(1200,650)
	paper=new Paper(200,200,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  dusbin.display();
  
  ground.display();
  paper.display();
  
  drawSprites();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});
	}
}

