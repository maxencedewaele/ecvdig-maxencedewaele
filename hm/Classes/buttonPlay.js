function buttonPlay() {
   this.button;

   this.display = function() {
      var c = color(randBackR,randBackG,randBackB);
      this.button = createButton('play');
      this.button.class('btn');
      this.button.position(300, 30);
      this.button.style('color',c);
      this.button.mouseClicked(playMusic);
   }
}
