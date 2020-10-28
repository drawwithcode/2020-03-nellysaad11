let bg, pins, sound;
let savedx;
let savedy;



function preload(){
bg= loadImage("assets/world-map.jpg");
pins=loadImage("assets/pins.png");
soundFormats('mp3');
sound=loadSound("assets/soundA.mp3");
}



function setup(){
  createCanvas(windowWidth,windowHeight);
  //cnv.mouseClicked();
background (bg);
}

function draw(){
  //runs continuously

text("click locations you have visited", 0, 0, width);
fill("#db3236	");
textSize(20);
textFont("AVENIR");
textStyle(BOLD);
textAlign(CENTER, BASELINE);
image(pins,savedx,savedy ,20,30);

}


function mouseClicked(){
  //runs once when mouse is clicked
  savedy=mouseY;
  savedx=mouseX;
  sound.play();
}
