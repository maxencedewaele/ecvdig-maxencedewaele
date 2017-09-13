function preload(){
  sound = loadSound('songs/moderat.mp3');
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




function togglePlay() {
   if(song.isPlaying()) {
      song.pause();
   } else {
      song.loop();
   }
}

function setup() {
   var canvas = createCanvas(w,h);
   canvas.mouseClicked(togglePlay);
   fft = new p5.FFT();
   sound.amp(0.2);
   sound.setVolume(0.1);
   sound.play();
   for(var i=0; i<100; i++) {
      balls[i] = new Ball();
   }
}

function draw() {
   var spectrum = fft.analyze();
   background(randBackR,randBackG,randBackB);
   for(var i=0; i< balls.length; i++) {
      balls[i].display();
      balls[i].move();
   }
}


// Jitter class
function Ball() {
  this.x = random(w);
  this.y = h/2;
  this.diameter = random(10, 30);
  this.r = random(128,255);
  this.g = random(128,255);
  this.b = random(128,255);

  this.move = function() {
     this.x += random(-1,1);
     this.y += random(-1,1);
 }

  this.display = function() {
     fill(this.r,this.g,this.b);
     noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
};
