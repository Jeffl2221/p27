
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5; 
var log1,chain1,chain2,chain3,chain4,chain5;
function preload()
{
       
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1= new Bob(600,500,50,50);
	bob2= new Bob(200,500,50,50);
	bob3= new Bob(300,500,50,50);
	bob4= new Bob(400,500,50,50);
	bob5= new Bob(500,500,50,50);
	log1 = new log(400,100,600,20);
	chain1 = new Link(bob1.body,{x:600,y:100});
	chain2 = new Link(bob2.body,{x:200,y:100});
	chain3 = new Link(bob3.body,{x:300,y:100});
	chain4 = new Link(bob4.body,{x:400,y:100});
	chain5 = new Link(bob5.body,{x:500,y:100});
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  log1.display();
  bob5.display();
  chain5.display();
  drawSprites();
   
}



