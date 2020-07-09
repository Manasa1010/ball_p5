var ball1,ball2,ball3,ball4,ball5;
var player;
var bullet;
var score = 100;


function setup() {
  createCanvas(500,500);
  player=createSprite(200, 200, 30, 30);
 ball1=createSprite(0,0,20,20);
 ball1.velocityY=3
 ball1.velocityX=4
 ball2=createSprite(100,500,20,20);
 ball2.velocityY=-3
 ball2.velocityX=3
 ball3=createSprite(500,500,20,20);
 ball3.velocityY=-3
 ball3.velocityX=-3
 ball4=createSprite(500,0,20,20);
 ball4.velocityY=3
 ball4.velocityX=-3
 ball5=createSprite(150,150,20,20);
 ball5.velocityY=3
 ball5.velocityX=3
  
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
  bounceOff(ball1,ball2);
  bounceOff(ball3,ball5);
  bounceOff(ball4,ball2);
  if(isTouching(ball1,player||ball2,player||ball3,player||ball4,player||ball5,player)){
    score=score-20;
  }
  if(isTouching(bullet,ball1||bullet,ball2||bullet,ball3||bullet,ball4||bullet,ball5)){
    score=score+20;
  }
  if(ball1>500||ball1<0){
    ball1.x=200;
    ball1.y=50;
  }
  if(ball2>500||ball2<0){
    ball2.x=400;
    ball2.y=400;
  }
  if(ball3>500||ball3<0){
    ball3.x=500;
    ball3.y=500;
  }
  if(ball4>500||ball4<0){
    ball4.x=0;
    ball4.y=200;
  }
  if(ball1>500||ball1<0){
    ball1.x=300;
    ball1.y=90;
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