let c1,c2;
var gif_createImg;
function preload() {
  //gif_loadImg = loadImage("ok.gif");
  gif_createImg = createImg("world.gif");
}

function setup() {
createCanvas(windowWidth, windowHeight,WEBGL);
c1 = color(28,190,180);
c2 = color(251, 136, 163);

 
}

function draw() {
  //background(0);
  noStroke();
fill(255, 255, 0);

  setGradient(0, 0, windowWidth, windowHeight, c1, c2, "Y");

   gif_createImg.position(windowWidth/3, windowHeight/3);
   //gif_createImg.resize(windowWidth,windowHeight);
}

//function windowResized() {
 // resizeCanvas(windowWidth, windowHeight);    //resizing the canvas to fill the screen.
//}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") {  // Top to bottom gradient
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == "X") {  // Left to right gradient
    for (let j = x; j <= x+w; j++) {
      var inter2 = map(j, x, x+w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y+h);
    }
  }
}