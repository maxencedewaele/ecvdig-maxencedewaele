function Img() {
   this.img;
   this.display = function() {
      this.img = createImg('daft.jpg');
      this.img.addClass('cover');
      this.img.mouseClicked(togglePlay);
   }

   this.rotation = function(speed) {
      // if(sound.isPlaying()) {
         rotateValue+=speed;
         this.img.style("rotate", rotateValue);
      // }
      // if(sound.reverseBuffer()) {
      //    rotateValue-=speed;
      //    this.img.style("rotate", rotateValue);
      // }
   }
};
