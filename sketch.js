const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingShot = new SlingShot(this.polygon,{x:100,y:200})
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,30);
  block3 = new Block(360,275,30,30);
  block4 = new Block(390,275,30,30);
  block5 = new Block(420,275,30,30);
  block6 = new Block(450,275,30,30);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,30);
  block10 = new Block(390,235,30,30);
  block11 = new Block(420,235,30,30);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,30);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);



  block17 = new Block(720,100,20,20);
  console.log(block17);
  block20= new Block(740,100,20,20);
  block32 = new Block(760,100,20,30);

  block18 = new Block(700,100,20,20);
  block19= new Block(680,100,20,20);
 
  block21= new Block(660,100,20,20);
  block22= new Block(640,100,20,30);
 
  //level two
  block23= new Block(700,80,20,20);
  block24= new Block(720,80,20,20);
  block25= new Block(680,80,20,20);
  block26 = new Block(740,80,20,30);
  block27 = new Block(660,80,20,30);
 
  //level three
  block28 = new Block(700,60,20,20);
  block29 = new Block(720,60,20,30);
  block30 = new Block(680,60,20,30);
  
  //top
  block31 = new Block(700,40,20,30);

  

}
function draw() {
  background(142,197,237); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 


  strokeWeight(2);
  stroke(15);
  fill("grey");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block32.display();
  fill("skyblue");
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  fill("pink");
  block28.display();
  block29.display();
  block30.display();
  fill("turquoise");
  block31.display();
  
  //polygon.display();
  fill("gold");
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
