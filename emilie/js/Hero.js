(function(window){
	function Hero(imgHero) {
 		this.initialize(imgHero);
	}
	

	Hero.prototype = new createjs.Sprite();
	// constructors:
	Hero.prototype.Sprite_initialize = Hero.prototype.initialize;	//unique to avoid overiding base class
	// public methods:
	Hero.prototype.initialize = function(imgHero) {
		
			var data = {
				images: ["img/lapinou.png"],
				frames: {width: 150, height: 90, regX: 75, regY: 45},
				animations: {
					// start, end, next, speed
					walk: [1, 7, "walk"],
					idle: [0, 0,"idle"],
					jump: [3, 3,"jump"]
					}
		};
		var animPersonnage = new createjs.SpriteSheet(data);
		this.constructor(animPersonnage);

		
	}
window.Hero=Hero;
}
(window));	
