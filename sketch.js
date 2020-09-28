var fixedRect,movingRect;
var car,wall;
var speed,weight;
var deformation;


function setup() {
  createCanvas(1600,400);
 fixedRect =  createSprite(50, 50, 20, 50);
 fixedRect.shapeColor = "green";
 movingRect = createSprite(50,150,20,50);
 movingRect.shapeColor = "brown";
gameObj1 =  createSprite(50, 250, 20, 50);
 gameObj1.shapeColor = "yellow";
 gameObj2 = createSprite(50,350,20,50);
 gameObj2.shapeColor = "blue";


wall1=createSprite(950,50,20,40);
wall1.shapeColor = color(80,80,80);
wall2=createSprite(950,150,20,40);
wall2.shapeColor = color(80,80,80);
wall3=createSprite(950,250,20,40);
wall3.shapeColor = color(80,80,80);
wall4=createSprite(950,350,20,40);
wall4.shapeColor = color(80,80,80);
speed=random(15.30);
weight = random(400,1500);
deformation = 0.5*weight*speed*speed/22500;

}

function draw() {
  background(0); 
  
  fixedRect.velocityX = speed ;
  movingRect.velocityX = speed ;
  gameObj1.velocityX = speed ;
  gameObj2.velocityX = speed ;

if(isTouching(movingRect,wall2)){
  movingRect.shapeColor = "yellow";
  wall2.shapeColor = "yellow"; 
}

if(isTouching(fixedRect,wall1)) {
  wall1.shapeColor = "green";
    fixedRect.shapeColor = "green"; 
}

if(isTouching(gameObj1,wall3)) {
  wall3.shapeColor = "blue";
    fixedRect.shapeColor = "blue"; 
}

if(isTouching(gameObj1,wall4)) {
  wall4.shapeColor = "green";
    fixedRect.shapeColor = "green"; 
}
 

  drawSprites();

}
