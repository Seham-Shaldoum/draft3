var gif_loadImg, gif_createImg;
let font;
var sound;
var button;
function preload() {
  font = loadFont("Caveat-VariableFont_wght.ttf");
  sound = loadSound("Broke For Free.mp3");
  gif_loadImg = loadImage("ok.gif");
  gif_createImg = createImg("ok.gif");
}
function setup() { 
createCanvas(windowWidth, windowHeight,WEBGL);
background(0)
button = createImg("Hi.PNG");
button.size(250, 250);
button.position(0, 0);
button.mousePressed(showimg); 
  sound.play();
} 




function draw() { 
 rotateX(frameCount * 0.1);
 rotateY(frameCount * 0.1);
box(10, 150, 900, 800); 
  push();
 translate(0,tan(frameCount*0.01)*30);
  //rotateX(frameCount*0.01);
  //rotateY(frameCount*0.01);
  pop();
  //image(gif_loadImg, 0, 0);
  gif_loadImg.resize(200,200)
  
  // updates animation frames by using an html
  // img element, positioning it over top of
  // the canvas.
  gif_createImg.position(windowWidth/1.415, windowHeight/3.15);
  fill(255,232,177);



}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);    //resizing the canvas to fill the screen.
}



function showimg() {
  var words = ["I am so relieved hearing this\nbecause I am such a night owl\nand I notice that I definitely preform better\nlater in the evening than the daytime.\nMornings are such a drag for me.", "This is why whenever I can\nI try to find a job that I can\ndo night shifts so I\ncan operate within my strengths\nrather than dragging myself\nthrough the day.", "I work swing shift.\nAnd I’m doing just fine.\nNights are way better for me.", "interestingly there are slightly\nmore night owls than morning\nlarks yet still we live in\na society made for morning larks","It's time for a revolution.","More people should know about this!","I'll take the shift that has\nless people on the road.\nThat's fine w/ me.","I'm at my peak performance\nat 1-2 am."];
  text(random(words), -windowWidth/2, -windowHeight/11);
 textWrap(WORD);
  stroke(0);
 strokeWeight(100);
  fill(97,203,255);   
  //textSize(100);
  textAlign(LEFT);
  textFont(font);
  textSize(windowWidth*0.031);
}

