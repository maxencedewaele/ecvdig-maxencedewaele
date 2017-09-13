function preload(){
   soundFormats('mp3', 'ogg');
   var songs = ["vitalic.mp3", "daft.mp3", "moderat.mp3"];
   var selectedSong = Math.floor(Math.random() *songs.length);
   sound = loadSound('songs/'+songs[selectedSong]+'');
}

// RESIZE :D
var w = window.innerWidth;
var h  = window.innerHeight;

window.onresize = function(event) {
   var newW = event.target.innerWidth;
   var newH = event.target.innerHeight;

   canvas.width = newW;
   canvas. height = newH;

   location.reload();
};

// VAR
var balls = [];
var randBackR = Math.floor(Math.random() * 255) + 128;
var randBackG = Math.floor(Math.random() * 255) + 128;
var randBackB = Math.floor(Math.random() * 255) + 128;
var sound;
var amplitude;
var canvas;
var rotateValue = 0;
var imgDefault;
var reverseButton;
var pauseButton;
var playButton;


function togglePlay() {
   if(sound.isPlaying()) {
      sound.pause();
      imgDefault.rotation(0);
   } else {
      sound.loop();
   }
}


function setup() {
   canvas = createCanvas(w,h);
   amplitude = new p5.Amplitude();
   sound.amp(0.4);
   sound.setVolume(0.1);
   sound.stop();
   sound.play();

   for(var i=0; i<50; i++) {
      balls[i] = new Ball();
   }

   // COVER IMAGE
   imgDefault = new Img();
   imgDefault.display();

   //REVERSE BUTTON
   reverseButton  = new buttonR();
   reverseButton.display();

   // PAUSE BUTTON
   pauseButton = new buttonP();
   pauseButton.display();

   // PLAY BUTTON
   playButton = new buttonPlay();
   playButton.display();
}


function draw() {
   background(randBackR,randBackG,randBackB);
   translate(0,h/2);
   for(var i=0; i< balls.length; i++) {
      balls[i].display();
      balls[i].move();
   }
   if(sound.isPlaying()) {
      imgDefault.rotation(10);
   }
}

function reverseMusic() {
   if(sound.isPaused()) {
      sound.play();
   }
   sound.reverseBuffer();
}


function playMusic() {
   if(sound.isPlaying()) {
   } else{
      if(sound.isPaused()) {
         sound.loop();
      } else {
         sound.play();
      }
   }
}
