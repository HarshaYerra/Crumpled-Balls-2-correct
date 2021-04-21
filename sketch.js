const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,box1,box2,box3,paper1

function preload()
{
	boximage = loadImage('box.png');
}

function setup() {
	
	
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	box1 = new Box(1050,495);
	
	box2 = new Box(500,495);
	ground1 = new Ground(700,550,1400,30);
	
	paper1 = new Paper(200,300);
	
	
  
}


function draw() {

	Engine.update(engine);
	background(206,237,227);
	
	
	
	
	ground1.display();
	paper1.display();
	box1.display();

	box2.display();

	
	
	
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
	}



