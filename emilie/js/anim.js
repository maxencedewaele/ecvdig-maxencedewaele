// Variables globales
var stage;

// Initialisation de la scène
stage = new createjs.Stage("canvas");

// Variables des chemins des images
var imgHero, cimg;

// Variables des objets
var hero, carrot, unePlateform;

// Variables des éléments sur la scène
var nbElement = 0;
var nbElementScene = 2;

// Variables contenant des tableaux
var platforms;

// Variables de direction
var left, right;


// Déplacement en y
var vy = 0 ;

// Déplacement en x
var vx = 0;

// Gravité
var gravity = 2;

// Variable pour le saut
var jumping = false

// Variable indiquant si le héros est dans les airs(true)
var inAir = false ;

// Variable permettant d'animer le héros
var animPersonnage = false ;

// Variable pour connaître le centre du hero
var heroCenter ;

var hPlatform1 = 4.9 * (stage.canvas.height/6);
var lPlatform1 = stage.canvas.width;

var xPlatform2 = stage.canvas.width/8;
var yPlatform2 = 4.5 * (stage.canvas.height/8);
var wPlatform2 = 3 * (stage.canvas.width/16);

var xPlatform3 = 5 * (stage.canvas.width/8);
var yPlatform3 = 2.4 * (stage.canvas.height/8);
var wPlatform3 = 2 * (stage.canvas.width/8);

// Plateformes
var plateformX = [0, xPlatform2, xPlatform3];
var plateformY = [hPlatform1, yPlatform2, yPlatform3];
var plateformW = [lPlatform1, wPlatform2, wPlatform3];


function init() {
    // Initialisation de la boucle mise à jour de l'affichage
    createjs.Ticker.addEventListener("tick", tick);

    // Chargement de la source de l'image
    imgHero = new Image();
    imgHero.src = "img/lapinou.png";
    imgHero.onload = chargementImage;
    
    // Image de la clé
	cimg = new Image();
	cimg.src = "img/carrot.png";
	cimg.onload = chargementImage;
}


function chargementImage(evt)
{
	nbElement = nbElement + 1;
	if (nbElement == nbElementScene)
	{
		jouer();
	}
}


function jouer()  {
	// Création de l'objet hero
	hero = new Hero(imgHero);
	stage.addChild(hero);
	hero.x = stage.canvas.width/2;
    tiersCanvas = stage.canvas.height/6;
	hero.y = 4.9 * tiersCanvas;
    
    carrot = new createjs.Bitmap(cimg);
	carrot.x = 13 * (stage.canvas.width/16);
	carrot.y = 2.4 * (stage.canvas.height/8);
	stage.addChild(carrot);
    
    
    // Déclaration du tableau
	platforms = new Array();

	//Parcours et création
	for(i = 0; i < plateformW.length; i++)
	{
		unePlateform = new Platform(plateformW[i],20);
		unePlateform.x = plateformX[i];
		unePlateform.y = plateformY[i];
		stage.addChild(unePlateform);

		//Ajout de la création au tableauu platerforms
		platforms.push(unePlateform);
	}

	hero.gotoAndPlay("idle");
    
    window.onkeydown = handleKeyDown;
	window.onkeyup = handleKeyUp;
}


function handleKeyDown(evt) {
	var key = evt.keyCode; // Récupère dans la variable key le code de la touche appuyée
	//console.log(key);

	if(key == 37)
	{
		left = true;
	}

	if(key == 39)
	{
		right = true;
	}

	if(key == 32 || key == 38)
	{
		jump();
	}
}

function jump() {
	if (jumping == false && inAir == false)
	{	
		hero.gotoAndPlay("jump");
		hero.y = hero.y-20;
		animPersonnage = false;
		vy = -25;
		jumping = true;
		inAir = true;
	}
}

function handleKeyUp(evt) {
	var key = evt.keyCode; // Récupère dans la variable key le code de la touche appuyée

	if(key == 37)
	{
		left = false;
		hero.gotoAndPlay("idle");
	}

	if(key == 39)
	{
		right = false;
		hero.gotoAndPlay("idle");
	}

	animPersonnage = false;
}

function gestionClavier(evt)
{
	var key=evt.keyCode; // Récupère dans la variable key le code de la touche appuyée
	console.log(key);
	if(key == 38)
	{
		hero.gotoAndPlay("jump");
	}

	if(key == 39)
	{
		hero.gotoAndPlay("walk");
	}
}



function tick(evt)
{
	// Mise à jour affichage 30*par seconde ici
	stage.update();

	deplacement();
    allCollisions();
    
    heroCenter = hero.y-20;
}

function deplacement() {
	if(left == true)
	{
		vx = -20;
	}


	if(left && animPersonnage == false && inAir == false) {
		hero.gotoAndPlay("walk");
		hero.scaleX = -1;
		animPersonnage = true;
	}

	if(right == true)
	{
		vx = +20;
	}

	hero.x = hero.x + vx;

	if(right && animPersonnage == false && inAir == false) {
		hero.gotoAndPlay("walk");
		hero.scaleX = 1;
		animPersonnage = true;
	}

	vx=vx*0.5;

	vy = vy + gravity;
	if(inAir == true) {
		hero.y = hero.y + vy;
	}
}


function allCollisions() {
	inAir = true;

	for(i=0; i<plateformW.length; i++) {
		if(hero.y >= platforms[i].y &&
			hero.y <= (platforms[i].y + platforms[i].height) &&
			hero.x > platforms[i].x &&
			hero.x < (platforms[i].x + platforms[i].width)) {
				hero.y = platforms[i].y;
				vy = 0;
				inAir = false;
				if(jumping == true) {
					jumping = false;
					hero.gotoAndPlay("idle");
				}
		}
	}
    
    if (collisionHero(carrot.x, carrot.y,20)) {
		carrot.visible = false;
	}
}

function collisionHero (xPos, yPos, Radius){
	var distX = xPos - hero.x;
	var distY = yPos - heroCenter;
	var distR = Radius + 20;
	if (distX * distX + distY * distY <= distR * distR) {
		return true;
	}
}

window.onload=init;