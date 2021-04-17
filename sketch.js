
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var stone;
var chain; 

var treeSprite,treeIMG;
var groundSprite,groundIMG;
var boySprite,boyIMG;
var bgIMG;



function preload()
{
	treeIMG = loadImage("tree.png")
	groundIMG = loadImage("ground.png")
	boyIMG = loadImage("boy.png")
	bgIMG = loadImage("bg.jpeg")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ground = new Ground(600,707,100000,15);
	stone = new Stone(1000,550,30);
    
	mango1 = new Mango(100,500,30);
	mango2 = new Mango(200,450,30);
	mango3 = new Mango(300,450,30);
	mango4 = new Mango(400,500,30);
	mango5 = new Mango(500,500,30);
	mango6 = new Mango(480,575,30);
	mango7 = new Mango(130,400,30);
	mango8 = new Mango(470,400,30);
	mango9 = new Mango(380,400,30);
	mango10 = new Mango(270,400,30);
	mango11 = new Mango(150,340,30);
	mango12 = new Mango(230,250,30);
	mango13 = new Mango(380,360,30);
	mango14 = new Mango(230,350,30);
	mango15 = new Mango(270,300,30);


    chain = new SlingShot(stone.body,{x: 1040, y: 565});





	Engine.run(engine);
  
}


function draw() 
{
  
  background(bgIMG);

  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();

  chain.display();
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  detectCollision(stone,mango13);
  detectCollision(stone,mango14);
  detectCollision(stone,mango15);
  
 
  drawSprites();
 
}

function mouseDragged()
{
    Matter.Body.setPosition(stone.body,{x:mouseX ,y:mouseY})
}

function mouseReleased()
{
    chain.fly();
}

function detectCollision(lstone,lmango)
{
	mangoBP = lmango.body.position;
	stoneBP = lstone.body.position;

	var distance = dist(stoneBP.x,stoneBP.y,mangoBP.x,mangoBP.y);

	if(distance <= lmango.r + lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false)
	}

}
function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body,{x:1000, y:550})
		chain.attach(stone.body)
	}
}

