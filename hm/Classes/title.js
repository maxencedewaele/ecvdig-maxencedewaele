function title() {
   this.title;
   this.link;

   this.display = function() {
      this.title = createP(randomMusic.name);
      this.title.class('title');
      this.title.position(200,30);

      var c = color(randBackR,randBackG,randBackB);
      this.link = createA(randomMusic.link, 'website');
      this.link.class('link');
      this.link.position(200,110);
      this.link.style('color',c);
      this.link.attribute("target","_blank");
   }
}
