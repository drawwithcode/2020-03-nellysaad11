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






/*
let bg;
let song = [];
let pins;

function preload(){
soundFormats('mp3');
 song = loadSound("./assets/sound1.mp3");

  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg= loadImage("./assets/world-map.jpg");
  pins=loadImage("./assets/pins.png");
  song=loadSound("./assets/sound1.mp3");

     }

function draw() {
  background (bg);
//text
let textA= "Click Your Location"
  fill("#E48582");
  textSize(60);
  textAlign(CENTER, BASELINE);
  text(textA, 0, 0, width);
  textFont("Avenir");
  textStyle(BOLD);

class canvas{
  constructor(x,y){
  this.x (windowWidth);
  this.y (windowHeight);

}
}
function mouseClicked() {
    loadImage.pins;
      Song.play();
    }


  }
  */
