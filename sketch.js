 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1300, 400);


	engine = Engine.create();
	world = engine.world;

	/*rect1=createSprite(900,300,15,100);
	rect1.shapeColor=color("red");
	rect2=createSprite(977,360,160,15);
	rect2.shapeColor=color("red");
	rect3=createSprite(1060,300,15,100);
	rect3.shapeColor=color("red");
	ground=createSprite(650,380,1300,20);
	ground.shapeColor=color("aqua");*/
	var ground_options={
		isStatic:true,

	}
	ground=Bodies.rectangle(650,380,1300,20,ground_options);
	World.add(world,ground);
	waste1=new waste(200,300,1);
	dustbin1=new dustbin(900,270,15,150);
	//dustbin2=new dustbin(1040,360,250,15);
	//dustbin3=new dustbin(1180,300,15,150);
	Engine.run(engine);
}


function draw() {
 
  background(222);
  rectMode(CENTER);
  Engine.update(engine);
  waste1.display();
  rect(ground.position.x,ground.position.y,1300,20);

  dustbin1.display();
  // dustbin2.display();
  // dustbin3.display();
   keyPressed();
  drawSprites();
 
}
function keyPressed(){

	if(keyCode===32){

	Matter.Body.applyForce(waste1.body,waste1.body.position,{x:1,y:-4});

	}
}


