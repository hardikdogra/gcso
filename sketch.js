var car,wall;
var speed,weight;



function setup() {
  createCanvas(1200,800);
  createSprite(400, 200, 50, 50);

  car = createSprite(50,200,50,50);
  car.shapeColor = "green";
  car.debug = true;
  wall = createSprite(1500,200,60,height/2);

  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(255,255,255);  

  car.x = World.mouse.X;

  car.velocityX = speed;

  
    


  drawSprites();
}
function isTouching(car,wall){
  if (car.x - wall.x < wall.width/2 + car.width/2
      && wall.x - car.x < wall.width/2 + car.width/2
      && car.y - wall.y < wall.height/2 + car.height/2
      && wall.y - car.y < wall.height/2 + car.height/2) {
       
      return true;
  }
  else {

      return false;
  }
  if(wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX = 0;
    var deformation = 0.5 * speed * speed* speed/22509;
    if(deformation > 180){
        car.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100){
car.shapeColor = color(230,230,0);
    }
    if(deformation > 100){
     car.shapeColor = color(0,255,0);
    }
  }

}

