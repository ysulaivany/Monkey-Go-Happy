
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var ground;
var Survivaltime,score;


function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup(){
  createCanvas(600,400);
  // creating Monkey
  monkey = createSprite(50,300,10,10);
  monkey.addAnimation("Yussif",monkey_running);
  monkey.scale=0.1;
  
// Creating Ground
  ground = createSprite(400,315,1200,10);
  ground.velocityX=-8;
  
  //cfreating Groups
  FoodGroup = new Group();
  obstacleGroup =new Group();
  score =0;
  
}
function draw(){
  background("white");
  
  // Resetting the Ground
  if(ground.x<0){
    ground.x=ground.width/2;
  }

  
  // if Y position of Monkey is greater than 250 only the monkey will jump , so that it does not jump in midair
 
   if(keyDown("space")&& monkey.y >= 250) {
        monkey.velocityY = -12;
       
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  // Call Food function to dispaly Bananas
  food();
  obstacles();
  
  if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
    
    }
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score =score+1;
  }
    drawSprites();
  stroke("white");
  textSize(20);
  fill("black");
  text("Score: "+ score, 400,50);        
  
}

function food(){
   //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    banana = createSprite(600,200,40,10);    
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    
    //add image of banana
     banana.addImage(bananaImage);
     banana.scale=0.05;
    
    //add each banana to the group
    FoodGroup.add(banana);
  }
}

function obstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,285,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}







