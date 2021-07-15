const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var groundObj , leftSide , rightSide;
var ball;

function setup() {
  createCanvas(1100,500);
  engine = Engine.create();
  world= engine.world;



groundObj=new Ground (width/2,470,width,20);
leftSide=new Ground (1000,400,20,120);
rightSide=new Ground (700,400,20,120)


var ball_options ={
  
restitution:0.97

}
ball = Bodies.circle(200,200,20,ball_options);
World.add(world,ball);
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  groundObj.display();
  leftSide.display();
  rightSide.display();
 
  ellipse(ball.position.x , ball.position.y , 20)

}


function keyPressed (){

if (keyCode === UP_ARROW){

Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0.001})

}

}



