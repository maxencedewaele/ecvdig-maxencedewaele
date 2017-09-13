// BALL CLASS
function Ball() {
  this.x = random(w/4, 3*w/4);
  this.y = 0;
  this.diameter = random(10, 30);
  this.r = random(128,255);
  this.g = random(128,255);
  this.b = random(128,255);

  this.move = function() {
     frameRate(10);
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
