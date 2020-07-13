var ball1,ball2,ball3,ball4,ball5;
var player;
var bullet;
var score = 500;
var edge1,edge2,edge3,edge4;


function setup() {
  createCanvas(500,500);
  player=createSprite(200, 200, 30, 30);
 ball1=createSprite(20,20,20,20);
 ball1.velocityY=3
 ball1.velocityX=3
 ball2=createSprite(100,480,20,20);
 ball2.velocityY=-3
 ball2.velocityX=3
 ball3=createSprite(470,480,20,20);
 ball3.velocityY=-3
 ball3.velocityX=-3
 ball4=createSprite(470,20,20,20);
 ball4.velocityY=3
 ball4.velocityX=-3
 ball5=createSprite(150,150,20,20);
 ball5.velocityY=3
 ball5.velocityX=3
 edge1=createSprite(10,10,10,1000);
 edge2=createSprite(490,10,15,1000);
 edge3=createSprite(10,490,1000,15); 
 edge4=createSprite(10,10,1000,15);
}

function draw() {
  background(0); 
  text("Score :"+score,100,100);
  if(keyIsDown(LEFT_ARROW)) {
    player.velocityX=-5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    player.velocityX=+5;
  }
  if(keyIsDown(32)){
    bullet=createSprite(200,200,5,8);
    bullet.x=player.x;
    bullet.velocityY=-5;
  }
  if(player.x>500){
    player.x=10;
    player.velocityX=0
  }
  if(player.x<0){
    player.x=500;
    player.velocityX=0
  }
 
  ball1.bounceOff(edge1)
  ball1.bounceOff(edge2)
  ball1.bounceOff(edge3)
  ball1.bounceOff(edge4);

  ball2.bounceOff(edge1)
  ball2.bounceOff(edge2)
  ball2.bounceOff(edge3)
  ball2.bounceOff(edge4);

  ball3.bounceOff(edge1)
  ball3.bounceOff(edge2)
  ball3.bounceOff(edge3)
  ball3.bounceOff(edge4);

  ball4.bounceOff(edge1)
  ball4.bounceOff(edge2)
  ball4.bounceOff(edge3)
  ball4.bounceOff(edge4);

  ball5.bounceOff(edge1)
  ball5.bounceOff(edge2)
  ball5.bounceOff(edge3)
  ball5.bounceOff(edge4);

  if(isTouching(ball1,player)||isTouching(ball2,player)||isTouching(ball3,player)||isTouching(ball4,player)||isTouching(ball5,player)){
    score=score-1;
  }
  if(isTouching(ball2,ball1)||isTouching(ball3,ball2)||isTouching(ball4,ball3)||isTouching(ball5,ball4)||isTouching(bullet,ball5)){
    score=score+1;
  }
  

  drawSprites();
}
function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
     return true;
  }
  else {
   return false;
  }
}
