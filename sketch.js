var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(100,100,50,50)
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,100,50,50)
  gameObject2.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(IsTouching(movingRect,gameObject1)){
  movingRect.shapeColor = "blue";
  gameObject1.shapeColor = "blue";
}
else{
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
}
  drawSprites();
}
