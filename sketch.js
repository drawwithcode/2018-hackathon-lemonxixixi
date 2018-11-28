var song;
var analyzer;
var volhistory = [];
function preload(){
  song = loadSound("./assets/ifyou.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.play();
  // Two lines of magic code. The "analyzer" is a sort of "function"
  // able to perform measurements on the song and give back values
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
}

function draw() {
    background(0);
  var volume = analyzer.getLevel();
  volhistory.push(volume);

  stroke(255);
  strokeWeight(4);
  noFill();
  var currentY =map(volume,0,1,height,0);
    translate(0,-height+currentY);
  beginShape();
  for(var i =0;i<volhistory.length;i++){
var y =map(volhistory[i],0,1,height/2,0);
    vertex(i,y);
  }
  endShape();
  if(volhistory.length > width){
    volhistory.splice(0,1);
  }
  stroke(255,0,0);
  line(volhistory.length,0,volhistory.length,height);
    // get the volume and remap it to a bigger value
  //  volume = analyzer.getLevel();
  //  volume = map(volume,0,1,0,height);
//  ellipse(width/2,height,volume);
}
