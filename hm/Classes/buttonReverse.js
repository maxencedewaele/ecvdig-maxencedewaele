function buttonR() {
   this.sound = sound;
   this.button;

   this.display = function() {
      var c = color(randBackR,randBackG,randBackB);
      this.button = createButton('reverse');
      this.button.class('btn');
      this.button.position(w-200, 30);
      this.button.style('color',c);
      this.button.mouseClicked(reverseMusic);
   }
};
