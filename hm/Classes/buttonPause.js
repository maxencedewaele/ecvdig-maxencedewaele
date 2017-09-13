function buttonP() {
   this.button;
   this.display = function() {
      var c = color(randBackR,randBackG,randBackB);
      this.button = createButton('pause');
      this.button.class('btn');
      this.button.position(w/2-50, 30);
      this.button.style('color',c);
      this.button.mouseClicked(togglePlay);
   }
}
