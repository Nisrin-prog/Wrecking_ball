const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies 
const Constraint = Matter.Constraint

function setup(){
  createCanvas(1200,700)
  engine = Engine.create()
  //alias (nickname)
  world = engine.world;

  var options = {
    friction : 0.1,
    airFriction : 0.01,
    density : 1,
    restitution : 0.3
  }
  ball = Bodies.circle(500,250,30,options)
  World.add(world,ball)
  
  var ground_options={
    isStatic:true
  }
  ground = Bodies.rectangle(600,680,1200,20, ground_options)
  World.add(world,ground)

  // Creating an instance of the class Block
  block1 = new Block(900,100,70,70)
  block2 = new Block(900,100,70,70)
  block3 = new Block(900,100,70,70)
  block4 = new Block(900,100,70,70)
  block5 = new Block(900,100,70,70)
  block6 = new Block(900,100,70,70)
  block7 = new Block(900,100,70,70)

  block8 = new Block(700,100,90,90)
  block9 = new Block(700,100,90,90)
  block10 = new Block(700,100,90,90)
  block11 = new Block(700,100,90,90)
  block12 = new Block(700,100,90,90)
  block13 = new Block(700,100,90,90)

  var const_options = {
    bodyA : ball,
    pointB : {x:500,y:10},
    length : 200,
    stiffness: 0.1
  }
  console.log(ball)
  chain = Constraint.create(const_options)
  World.add(world,chain)

}

function draw(){
  background("skyblue")
  Engine.update(engine)
  
  push () 
  fill("black")
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,60,60)
  pop ()

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1200,20)
  
  
  push ()  // -->to save the settings
  fill ("yellow")
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  pop () // to restore settings
  
  
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()

  strokeWeight(3)
  stroke("black")
  //console.log(chain)
 // line (chain.pointB.x,chain.pointB.x,chain.bodyA.position.x,chain.bodyA.position.x)
   line (chain.pointB.x,chain.pointB.y,chain.bodyA.position.x,chain.bodyA.position.y)
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:100,y:0})
  }
}