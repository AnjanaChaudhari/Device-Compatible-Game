var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashGr,diamondsGr,jwelleryGr,swordGr;


var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);

path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;



boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SiddharthRunning",boyImg);
boy.scale=0.08;
  
  
cashGr=new Group();
diamondsGr=new Group();
jwelleryGr=new Group();
swordGr=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashGr.isTouching(boy)) {
      cashGr.destroyEach();
      treasureCollection=treasureCollection + 50;
    }
    else if (diamondsGr.isTouching(boy)) {
      diamondsGr.destroyEach();
      treasureCollection=treasureCollection + 100;
      
    }else if(jwelleryGr.isTouching(boy)) {
      jwelleryGr.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(swordGr.isTouching(boy)) {
        gameState=END;
        
        boy.addAnimation("SiddharthRunning",endImg);
        boy.x=width/2;
        boy.y=height/2;
        boy.scale=0.6;
        
        cashGr.destroyEach();
        diamondsGr.destroyEach();
        jwelleryGr.destroyEach();
        swordGr.destroyEach();
        
        cashGr.setVelocityYEach(0);
        diamondsGr.setVelocityYEach(0);
        jwelleryGr.setVelocityYEach(0);
        swordGr.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,width-150,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 5;
  cash.lifetime = 200;
  cashGr.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 5;
  diamonds.lifetime = 200;
  diamondsGr.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 5;
  jwellery.lifetime = 200;
  jwelleryGr.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 4;
  sword.lifetime = 200;
  swordGr.add(sword);
  }
}