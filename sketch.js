var bullet,wall;
var speed,weight;
var thickness;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor="grey";
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
  thickness=random(22,83);
  wall.shapeColor(80,80,80);
}

function draw() {
  background("black");  
  if(hasCollided(Lbullet,Lwall)){
      bullet.velocityX=0;
      var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
      if(damage>10)
      {
        wall.shapeColor=color(255,0,0);

      }
          if(damage<10){
            wall.shapeColor=color(0,255,0);
          }
  }

    
  
  drawSprites();
}
function hasCollided(Lbullet,Lwall)
{
  ;bulletRightEdge=lbullet.x=lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightedge>=wallLeftEdge){
    return true
  }
  return false;
}