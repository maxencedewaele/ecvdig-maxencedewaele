function preload(){
  sound = loadSound('songs/daft.mp3');
}

// RESIZE :D
var w = window.innerWidth;
var h  = window.innerHeight;

window.onresize = function(event) {
   var newW = event.target.innerWidth;
   var newH = event.target.innerHeight;

   w = newW;
   h = newH;
   setup();
};

// SKETCH
var balls = [];
var randBackR = Math.floor(Math.random() * 255) + 128;
var randBackG = Math.floor(Math.random() * 255) + 128;
var randBackB = Math.floor(Math.random() * 255) + 128;
var sound;
var amplitude;



function togglePlay() {
   if(sound.isPlaying()) {
      sound.pause();
   } else {
      sound.loop();
   }
}

function setup() {
   var canvas = createCanvas(w,h);
   canvas.mouseClicked(togglePlay);
   amplitude = new p5.Amplitude();
   sound.amp(0.4);
   sound.setVolume(0.1);
   sound.stop();
   sound.play();
   for(var i=0; i<100; i++) {
      balls[i] = new Ball();
   }
}

function draw() {
   background(randBackR,randBackG,randBackB);
   translate(0,h/2);

   for(var i=0; i< balls.length; i++) {
      balls[i].display();
      balls[i].move();
   }
}


// Jitter class
function Ball() {
  this.x = random(w/4, 3*w/4);
  this.y = 0;
  this.diameter = random(10, 30);
  this.r = random(128,255);
  this.g = random(128,255);
  this.b = random(128,255);


  this.move = function() {
     var level = amplitude.getLevel();
     var size = map(level, 0, 1, 0, 200);
     var finalSize = size*40;

     this.y = random(-finalSize,finalSize);


 }

  this.display = function() {
     fill(this.r,this.g,this.b);
     noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
};
