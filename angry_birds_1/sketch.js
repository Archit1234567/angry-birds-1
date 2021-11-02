const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var bird,pig,pig1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,200,70,70);
    box2 = new Box(900,200,70,70);
    box3 = new Box(700,300,70,70);
    box4 = new Box(900,300,70,70);
    box5 = new Box(795,150,70,70);

    log1 = new Log(800,260,300,PI/2);
    log2 = new Log(800,160,300,PI/2);
   log3 = new Log(770,120,150,PI/7);
    log4 = new Log(885,120,150,PI/-7);

    bird = new Bird(100,100);

    pig = new Pig(800,250);
    pig1 = new Pig(800,320);

    ground = new Ground(600,height,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
   /* console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);*/
    console.log (mouseX,mouseY);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();


   log1.display();
   log2.display();
   log3.display();
   log4.display();

   bird.display();

    pig.display();
   pig1.display();
    ground.display();
}