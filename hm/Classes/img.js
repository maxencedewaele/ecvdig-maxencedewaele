function Img() {
   this.img;
   this.display = function() {
      this.img = createImg(randomMusic.img);
      this.img.addClass('cover');
      this.img.mouseClicked(togglePlay);
   }

   this.rotation = function(speed) {
         rotateValue+=speed;
         this.img.style("rotate", rotateValue);
   }
};
