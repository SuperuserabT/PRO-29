function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground = new Ground()
  stand = new Ground()

  //lvl 1
  block1 = new Box(300,275,30,40);
  block2 = new Box (330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);
  //lvl 2
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  //lvl 3
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  //lvl 4
  block16 = new Box(390,155,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x ,polygon.position.y,40,40);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}