var bg,bg2,form,s,code,security;
var score=0;

function preload() {
  bg = loadImage("treasure.jpg");
  bg2 = loadImage("aladdin_cave2.jpg")
}

function setup() {
  createCanvas(1000,500);
  code = new Code()
  security = new Security()
}

function draw() {

  background(bg2);
  
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  code.display();
 
  if(score === 3) {
    clear();
    background(bg)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
   security.hide();

  }

  drawSprites()
 
}