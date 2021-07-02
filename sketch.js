var dogImg, boyImg, lawnImg;

function preload(){
    dogImg = loadImage("boydog.jpg");
    //boyImg = loadImage("boy.jpg");
    
    //lawnImg = loadImage("lawn.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    dogsprite = createSprite(100,windowHeight/2);
    dogsprite.addImage("boydog",dogImg);
    dogsprite.scale = 0.25;
    dogsprite.velocityX = 3;
/*
    boysprite = createSprite(windowWidth/2,windowHeight/2);
    boysprite.addImage("boy",boyImg);
    boysprite.scale = 0.25;
    */
    //boysprite.velocityY = 1;
/*
    lawnsprite = createSprite(0,0);
    lawnsprite.addImage("lawn",lawnImg);
    lawnsprite.scale = 3;
    //lawnsprite.velocityY = 1;
*/
}

function draw() {
    background(0,255,0); // green solid background

    if(dogsprite.x > windowWidth + 25){
        dogsprite.x = 0;
      }
    
      drawSprites();

}
/*
function spawnClouds(){
    if(frameCount%60==0){
      cloud=createSprite(60,50);
      climber=createSprite(door.x,door.y-40);
      door.addImage("D",doorImg);
  
      climber.addImage("C",climberImg);
  
    
    }
  }
  */