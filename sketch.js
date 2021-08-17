var player,bg,playerimg,opponentimg,opponentimg2
var opponent,opponentGroup,opponent2,opponentGroup2
var bullet,bulletGroup
function preload(){
  bg=loadImage("bg.jpg")
  playerimg=loadImage("ss (2).png")
  opponentimg=loadImage("og (2).png")
  opponentimg2=loadImage("opponent2.png")
}

function setup() {
  createCanvas(displayWidth-100,displayHeight-100);
 player=createSprite(width/2,height-120,100,10)
 player.addImage(playerimg)
 player.scale=0.4
 opponentGroup=new Group();
 bulletGroup=new Group();
  opponentGroup2=new Group();
  
}

function draw() {
  background(bg);  
 player.x=mouseX
  
 spawnOpponent();
 spawnOpponent2();
 
if(keyDown("space")){
  shoot();
}
if(bulletGroup.isTouching(opponentGroup)){

  opponentGroup.destroyEach()
}
//bounceOff(movingRect,fixedRect)
  drawSprites();
}
function shoot(){
  bullet=createSprite(player.x,player.y,10,10)
  bullet.shapeColor="red"
  bulletGroup.add(bullet)
  bullet.velocityY=-4
}
function spawnOpponent(){
  if(frameCount%100===0){
    opponent=createSprite(random(50,width-150),0,10,10)
    opponent.addImage(opponentimg)
    opponent.scale=0.3
    opponent.mirrorY(-1)
    opponent.velocityY=+4
    opponentGroup.add(opponent)
  }
  
}
function spawnOpponent2(){
  if(frameCount%120===0){
    opponent2=createSprite(random(50,width-150),0,10,10)
    opponent2.addImage(opponentimg2)
    opponent2.scale=0.1
    opponent.mirrorY(-2)
    opponent2.velocityY=+4
    opponentGroup2.add(opponent2)
  }
}
