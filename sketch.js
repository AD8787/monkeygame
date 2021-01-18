
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var ground; 
var FoodGroup, obstacleGroup, bananaGroup;
var score;


function preload(){
  
  
  monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 360);

  
  score = 0;

  stroke("black");
  textSize(20);
  fill("black")
  score = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ score, 100, 50);

  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 1300, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)

  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  background(225);
  
  if(ground.x<0) {
    ground.x = ground.width/2;
  }

  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  spawnBanana();
  spawnObstacles();
  
  
  drawSprites();
  
}

function spawnBanana() {
  if(frameCount % 80 === 0){
    banana = createSprite(200, 200, 20, 20);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120, 200))
    banana.velocityX = -5;
    banana.lifetime = 200;
    banana.scale = 0.1;
    bananaGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 200 === 0){
    obstacle = createSprite(600, 330, 10, 40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -5
    obstacle.lifetime = 200;
    obstacle.scale = 0.1;
    obstacleGroup.add(obstacle);
  }
}




