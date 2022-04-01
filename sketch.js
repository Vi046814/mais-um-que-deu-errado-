const Engine = Matter.Engine;
const World = Matter.World;
const  Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ball;
var ground;

var botao1;

var angle = 60;

var giro1, giro2;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  
  var ball_options = {
   restitution: 0.95,
   frictionAir:0.01
  }

  var ground_options = {
    isStatic: true
  };


  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,200,400,20,ground_options);
  World.add(world,ground);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  botao1 = createImg("up.png");
  botao1.position(30,50);
  botao1.size(50,50);
  botao1.mouseClicked(vForce);

  giro1 = new Ground(100,100,50,10);
  giro2 = new Ground(200,100,50,10);

}


function draw() 
{
  background("black");
  Engine.update(engine);
  

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x, ground.position.y,400,20);
  
  giro1.display();
  giro2.display();
  
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0, y:-0.05});
}

